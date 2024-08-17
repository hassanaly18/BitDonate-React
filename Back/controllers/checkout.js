import axios from "axios"
import crypto from "crypto"
import {Donater} from "../models/donater.js"

//Base url
const cryptomus = axios.create({
    baseURL:""
})