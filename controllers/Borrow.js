import Borrow from "../models/BorrowModel.js";
import  BorrowModel from "../models/BorrowModel.js";

// add borrows
export const addBorrows = async (req, res) => {
  const id = req.params.id;

  let data = {
    id: id,
    title: req.body.title,
    descrip: req.body.descrip,
    category: req.body.category,
    amount: req.body.amount,
    part: req.body.part,
    timee: req.body.timee,
    userUid: req.body.userUid,
    borrowUid: req.body.borrowUid,
    date: req.body.date,
    logo: req.body.logo,
    collect: req.body.collect,
  };

  const borrows = await Borrow.create(data);
  res.status(200).send(borrows);
};

// get all borrows
export const getAllBorrows = async (req, res) => {
  const borrows = await Borrow.findAll()
  res.status(200).send(borrows);
};

// get by id borrows
export const getOneBorrows = async (req, res) => {
  let id = req.params.id;
  let Borrow = await BorrowModel.findByPk(id);
  res.status(200).send(Borrow);
};

  // update borrows
  export const updateBorrows = async (req, res) => {
    let id = req.params.id;
  
    const borrows = await Borrow.update(req.body, { where: { id: id } });
    if (borrows.affectedRows === 1) {
      return res.json({ success: true });
    }
  
    res.status(200).send(borrows);
  };

  // delete borrows
  export const deleteBorrows = async (req, res) => {
  let id = req.params.id;

  await Borrow.destroy({ where: { id: id } });

  res.status(200).send("Borrows is deleted !");
};