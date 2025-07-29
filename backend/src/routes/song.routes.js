const express = require('express')
const multer = require('multer')
const router = express.Router()
const uploadFile = require('../service/storage.service')
const songModel = require('../models/song.model')


const upload = multer({storage:multer.memoryStorage()});


/*
title
artist
audio file
*/

router.post('/song',upload.single("audio"),async (req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const fileData = await uploadFile(req.file);
    const song = await songModel.create({
        title:req.body.title,
        artist:req.body.artist,
        audio:fileData.url,
        mood:req.body.mood
    })
    res.status(201).json({
        message:"song created successfully",
        song: song
    });
})

router.get('/song',async(req,res)=>{
    const {mood} = req.query

    const songs = await songModel.find({
        mood:mood
    })
    res.status(200).json({
        message:"song fetched successfully",
        songs
    })
})



module.exports = router