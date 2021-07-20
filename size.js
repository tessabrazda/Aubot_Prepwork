//Write a script that prints out the filesize, width and height of every image
// in the attached spreadsheet, and displays it in spreadsheet format.

async function getData(){
  //API call for a single image (functions on example, doesn't work on images from excel sheet)
  //need to upload files first to call this api on them. have list of image urls stored in links.txt

  var image = "boat_lake2.jpg"; //example image used on website to demonstrate the API call
  //other images won't work. Still trying to figure out why and how to make them work.
  //images need to be uploaded to use the fl_getinfo api call, but uploading isn't working.
  
  //What I know of the Cloudinary Upload API call:
  //all of the following strings entries:
    //file can be a url
    //upload_preset must be unsigned
    //signature requires authentication? automatically done with the SDKs? Requires an account?
    //unsigned format in Node.JS: cloudinary.v2.uploader.unsigned_upload(file, upload_preset, options, callback);

  var ApiString = "https://res.cloudinary.com/demo/image/upload/fl_getinfo/" + image;
  var response = await fetch(ApiString);
  var jsonData = await response.json();
  var output = jsonData.output //simplifies the code later

  //prints data in CSV format --> can easily be made into excel sheets
  document.getElementById("data").innerHTML += "<br>" + output.bytes + "," + output.width + "," + output.height;
}

function formatData(){
  //was going to make this into a recursive function to call this on the list of url strings to output the data
  //need getData() to work on uploaded images first to finalize this part
  //for(image in links.txt){
    getData();
  //}
}

