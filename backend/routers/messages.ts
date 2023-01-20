import express from 'express';
import {decodedMessage, encodedMessage} from "../types";

const messagesRouter = express.Router();

const Vigenere = require('caesar-salad').Vigenere;

messagesRouter.post('/encode', async (req, res) => {
  const message: decodedMessage = {
    password: req.body.password,
    decodedMessage: req.body.decodedMessage,
  };

  try {
    const cipherMessage = Vigenere.Cipher(message.password).crypt(message.decodedMessage);

    res.send({encoded: cipherMessage});
  } catch (e) {
    // next(e);
  }
});

messagesRouter.post('/decode', async (req, res) => {
  const message: encodedMessage = {
    password: req.body.password,
    encodedMessage: req.body.encodedMessage,
  };

  try {
    const decipherMessage = Vigenere.Decipher(message.password).crypt(message.encodedMessage);

    res.send({decoded: decipherMessage});
  } catch (e) {
    // next(e);
  }
});

export default messagesRouter;