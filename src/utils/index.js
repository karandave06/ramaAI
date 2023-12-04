import  download  from '../assets/download.png'
import {surpriseMePrompts} from '../constants'
import FileSaver from 'file-saver'

export function getRandmoPrompt (prompt) {
const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length)
const randomPrompt = surpriseMePrompts[randomIndex]

return randomPrompt
}

export async function downoladImage (_id,photo) {
FileSaver.saveAs(photo,`downolad-${_id}.jpg`);
}