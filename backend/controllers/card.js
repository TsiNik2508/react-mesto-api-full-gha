const cardSchema = require('../models/card');
const NotFound = require('../error/NotFound');
const BadRequest = require('../error/BadRequest');
const Forbidden = require('../error/Forbidden');

module.exports.getAllCards = (req, res, next) => {
  cardSchema
    .find({})
    .populate(['owner', 'likes'])
    .then((cards) => res.status(200).send(cards))
    .catch(next);
};

module.exports.createCards = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  cardSchema
    .create({ name, link, owner })
    .then((card) => cardSchema.populate(card, ['likes', 'owner'])
      .then((populatedCard) => res.status(200).send(populatedCard)))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest('На сервере произошла ошибка'));
      } else {
        next(err);
      }
    });
};

module.exports.likeCard = (req, res, next) => {
  cardSchema
    .findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true },
    )
    .populate(['likes', 'owner'])
    .then((card) => {
      if (!card) {
        throw new NotFound('Запрашиваемая карточка не найдена');
      }
      res.send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequest('На сервере произошла ошибка'));
      }
      return next(err);
    });
};

module.exports.dislikeCard = (req, res, next) => {
  cardSchema
    .findByIdAndUpdate(
      req.params.cardId,
      { $pull: { likes: req.user._id } },
      { new: true },
    )
    .populate(['likes', 'owner'])
    .then((card) => {
      if (!card) {
        throw new NotFound('Запрашиваемая карточка не найдена');
      }
      res.send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequest('На сервере произошла ошибка'));
      }
      return next(err);
    });
};

module.exports.deleteCard = (req, res, next) => {
  const { cardId } = req.params;
  return cardSchema.findById(cardId)
    .populate(['likes', 'owner'])
    .then((card) => {
      if (!card) {
        throw new NotFound('Запрашиваемая карточка не найдена');
      }
      if (!card.owner.equals(req.user._id)) {
        return next(new Forbidden('Недостаточно прав для удаления карточки'));
      }
      return card.remove().then(() => res.send({ message: 'Карточка удалена' }));
    })
    .catch(next);
};
