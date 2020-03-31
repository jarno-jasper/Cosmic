function WebPageBadgeInterface ()
{
  
      this.init = function ()
    {
// The default image saved in an array
   const defaultImage = {
   "width": "18",
   "height": "18",
   "pixels": [
     ["rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
     ["rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0))", "rgb(0,0,0,0)"],
     ["rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
     ["rgb(0,0,0,0)", "rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
     ["rgb(0,0,0,0)", "rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
     ["rgb(0, 0, 0)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
     ["rgb(0, 0, 0)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 87, 33)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
     ["rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 87, 33)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
     ["rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
     ["rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 87, 33)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
     ["rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(255, 87, 33)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
     ["rgb(0,0,0,0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(255, 200, 144)", "rgb(255, 200, 144)", "rgb(0, 0, 0)", "rgb(255, 200, 144)", "rgb(255, 200, 144)", "rgb(0, 0, 0)", "rgb(255, 200, 144)", "rgb(255, 200, 144)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
     ["rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0, 0, 0)", "rgb(255, 200, 144)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(0, 0, 0)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(0, 0, 0)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(255, 200, 144)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
     ["rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0, 0, 0)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
     ["rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0, 0, 0)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(255, 224, 144)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
     ["rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
     ["rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)", "rgb(0,0,0,0)"],
   ]
   };
       
   
   $(document).ready(function() {
   
   // Define the variables
   var $table = $('#pixelCanvas');
   var isDrawing = false;
   var isShiftPressed = false;
   var $colorPalette = $('.palette');
   var $colorPicker = $('#colorPicker');
   var $colorPickerSubmit = $('#colorPickerSubmit');
   var $selectedColor = null;
   var $inputHeight = 20;
   var $inputWidth = 20;
   
   var makeGrid = function() {
   
   $("#resetField").click(function() {
        $table.find("tr").remove(); 
        $(".preview").empty();
        makeGrid();
   });
   
     $table.find("tr").remove();
   // Draw a new table
     var rows = $inputHeight;
     var cols = $inputWidth;
   
     for (var x = 1; x <= rows; x++) {
       var tr = document.createElement('tr');
       for (var y = 1; y <= cols; y++) {
         $(tr).append("<td class=\"pixel\"></td>");
       }
       $table.append(tr);
     }
     
   }
   
   $("#downloadImage").click( function() {
       downloadImage();
   });
   
   const downloadImage = (evt) => {
   
     var a = document.createElement("a");
     document.body.appendChild(a);
     a.style = "display: none";
   
     var height = $table.height()
     var width = $table.width()
     // var html = canvas.html();
   
     var cloneCanvas = $table.clone();
   
   
     var data = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">' +
                '<foreignObject width="32" height="32">' +
                '<div xmlns="http://www.w3.org/1999/xhtml" width="32" height="32">'+
                '<table style="border-spacing: 0; border-collapse: collapse; width:32px;height:32px">'+
                 cloneCanvas.html() +
                 '</table>' +
                 '</div>'+
                '</foreignObject>' +
                '</svg>';
     
   
     var DOMURL = window.URL || window.webkitURL || window;
     var img = new Image();
     var svg = new Blob([data], {type: 'image/svg+xml'});
     var url = DOMURL.createObjectURL(svg);
   
     $(".preview").html(data);
     
     $("#buybadge").unbind().click(function() {
          drawImage();
     });
   };
   
   // Apply a new background color to the cells
   var fillPixel = function(pixel) {
     if (isShiftPressed) { // "Erase" on shift + click by making the cell white
       $(pixel).css("background-color", "white");
     } else {
       var color = $selectedColor.css('background-color');
       $(pixel).css("background-color", color);
     }
     downloadImage();
   }
   
   var drawImage = function(draw) {
     
    function $$(selector, context) {
        return (context || document.body).querySelector(selector);
    }


    const svg = $$('.preview svg'),
          img = $$('#img img'),
          canvas = $$('#canvas canvas');

    const sml = new XMLSerializer().serializeToString(svg),
          imgData = 'data:image/svg+xml;base64,' + btoa(sml);

    img.onload = function() {
        canvas.width  = img.naturalWidth  || img.width;
        canvas.height = img.naturalHeight || img.height;
        canvas.toDataURL("image/gif");

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0,0);
      
        var testa = canvas.toDataURL('image/gif');
        var res = testa.replace("data:image/png;", "data:image/gif;");  
        Web.ajax_manager.post("/shop/drawbadge/validate", {blob: res});
    }
    img.setAttribute("src", imgData);
   }
   
   function exportCanvasAsPNG(id, fileName) {

    var canvasElement = document.getElementById(id);

    var MIME_TYPE = "image/gif";

    var imgURL = canvasElement.toDataURL(MIME_TYPE);

    var dlLink = document.createElement('a');
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
}
   
   // Check if Shift is pressed
   var syncShift = function(event) {
     isShiftPressed = event.shiftKey;
   };
   
   // Select a color in the palette
   var selectColor = function($color) {
     $selectedColor = $color;
     $('.palette-color').removeClass('palette-color-selected');
     $selectedColor.addClass('palette-color-selected');
   }
   
   // Helper function to load the default image
   var importImage = function(data) {
     $inputWidth = data.width;
     $inputHeight = data.height;
     makeGrid();
     
     jQuery.each($table.find('tr'), function(i, node) {
       jQuery.each($(node).find('td'), function(j, node) {
         $(node).css('background-color', data.pixels[i][j]);
       });
     });
      downloadImage();
   }
   
   makeGrid();
   importImage(defaultImage);
   selectColor($('.palette-color').first()); // Make the fist color in the palette selected by default
   
   // Draw on click or click and hold
   $table.on('mousedown', '.pixel', function(event) {
     fillPixel(event.target);
     isDrawing = true;
   });
   
   $(document).on('mouseup', function() {
     isDrawing = false;
   });
   
   $(document).keydown(syncShift);
   $(document).keyup(syncShift);
   
   $table.on('mouseenter', '.pixel', function(event) {
     if (isDrawing) {
       fillPixel(event.target);
     }
   });
   
   $('.palette').on('click', '.palette-color', function(event) {
     selectColor($(event.target));
   });
   
   $('#colorPickerSubmit').click(function() {
     var el = $('<div class="palette-color"></div>').css('background-color', $colorPicker.val());
     $colorPalette.append(" ");
     $colorPalette.append(el);
   });
   
   
   // Hide / show the grid on clicking the checkbox
   $('#gridToggle').change(function(event) {
     if (event.target.checked) {
       $table.removeClass('pixel-canvas-nogrid');
     } else {
       $table.addClass('pixel-canvas-nogrid');
     }
   });
   });
      }
}