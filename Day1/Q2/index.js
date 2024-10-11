const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv.slice(4).join(' ');

const readFile = (fileName) =>{
  fs.readFile(fileName,`utf-8`,(err,data)=>{
    if(err){
      console.error(`Error reading file '${fileName}':`,err.message);
    } else{
      console.log(data);
    }
  });
};


//Function to delete a file 

const deleteFile = (fileName) =>{
  fs.unlike(fileName,(err) =>{
    if(err){
      console.error(`Error deleting file '${fileName}:',err.message`);
    }else{
      console.log(`File '${fileName}' deleted`);
    }
  });
};

const createFile = (fileName) => {
  fs.writeFile(fileName, '',(err)=>{
    if(err){
      console.error(`Error creating file '${fileName}':`,err,message);
    } else {
      console.log(`File '${fileName}' created`);
    }
  });
};


const appendToFile = (fileName,newContent) => {
  const contentWithNewLine = `\n${newContent}`;
  fs.appendFile(fileName, contentWithNewLine,(err)=>{
    if(err) {
      console.error(`Error appending to file 'fileName':`,err.message);
    } else {
      console.log(`Content appended to the file '${fileName}'`);
    }
  });
};

const renameFile = (oldName,newName) => {
  fs.rename(oldName, newName,(err)=>{
    if(err){
      console.error(`Error rename file from '${oldName}' to '${newName}':`,err.message)
    } else {
      console.log(`File '${oldName}' renamed to '${newName}'`);
    }
  });
};

const listDirectory = (dirPath) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Error listing directory '${dirPath}':`, err.message);
    } else {
      console.log(`Files in directory '${dirPath}':`);
      files.forEach(file => console.log(file));
    }
  });
};

switch (operation) {
  case 'read':
    if (file) {
      readFile(file);
    } else {
      console.log("Please specify a file to read.");
    }
    break;

  case 'delete':
    if (file) {
      deleteFile(file);
    } else {
      console.log("Please specify a file to delete.");
    }
    break;

  case 'create':
    if (file) {
      createFile(file);
    } else {
      console.log("Please specify a file to create.");
    }
    break;

  case 'append':
    if (file && content) {
      appendToFile(file, content);
    } else {
      console.log("Please specify a file and content to append.");
    }
    break;

  case 'rename':
    const newFileName = process.argv[4];
    if (file && newFileName) {
      renameFile(file, newFileName);
    } else {
      console.log("Please specify the old and new file names.");
    }
    break;

  case 'list':
    if (file) {
      listDirectory(file);
    } else {
      console.log("Please specify a directory to list.");
    }
    break;

  default:
    console.log(`Invalid operation '${operation}'`);
}