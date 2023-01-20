import express from 'express';
import {decodedMessage, encodedMessage} from "../types";

const messagesRouter = express.Router();

const Vigenere = require('caesar-salad').Vigenere;

messagesRouter.post('/encode', async (req, res) => {
  const message: decodedMessage = {
    password: req.body.password,
    decodedMessage: req.body.decodedMessage,
  };

  const cipherMessage = Vigenere.Cipher(message.password).crypt(message.decodedMessage);
  res.send({encoded: cipherMessage});
});

messagesRouter.post('/decode', async (req, res) => {
  const message: encodedMessage = {
    password: req.body.password,
    encodedMessage: req.body.encodedMessage,
  };

  const decipherMessage = Vigenere.Decipher(message.password).crypt(message.encodedMessage);
  res.send({decoded: decipherMessage});
});

export default messagesRouter;