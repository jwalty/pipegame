// Access DOM element object

const A1 = document.getElementById("A1");
const A2 = document.getElementById("A2");
const A3 = document.getElementById("A3");
const A4 = document.getElementById("A4");
const A5 = document.getElementById("A5");

const B1 = document.getElementById("B1");
const B2 = document.getElementById("B2");
const B3 = document.getElementById("B3");
const B4 = document.getElementById("B4");
const B5 = document.getElementById("B5");

const C1 = document.getElementById("C1");
const C2 = document.getElementById("C2");
const C3 = document.getElementById("C3");
const C4 = document.getElementById("C4");
const C5 = document.getElementById("C5");

const D1 = document.getElementById("D1");
const D2 = document.getElementById("D2");
const D3 = document.getElementById("D3");
const D4 = document.getElementById("D4");
const D5 = document.getElementById("D5");

const E1 = document.getElementById("E1");
const E2 = document.getElementById("E2");
const E3 = document.getElementById("E3");
const E4 = document.getElementById("E4");
const E5 = document.getElementById("E5");

//get rotation

function rotationValue()
{
    var el = document.getElementById("A2");
    console.log('el: ' + el);
    var st = window.getComputedStyle(el, null);
    console.log('st: ' + st);
    var tr = st.getPropertyValue("transform");

    // With rotate(30deg)...
    // matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
    console.log('Matrix: ' + tr);

    // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix

    var values = tr.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];

    var scale = Math.sqrt(a*a + b*b);

    console.log('Scale: ' + scale);

    // arc sin, convert from radians to degrees, round
    var sin = b/scale;
    // next line works for 30deg but not 130deg (returns 50);
    // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
    var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));

    console.log('Rotate: ' + angle + 'deg');
    document.getElementById("A2").style.rotate = "-90deg";
    alert(document.getElementById("A2").style.rotate);
}

// Variable to hold the current angle of rotation

let rotation = 0;

// How much to rotate the image at a time

const angle = 90;

function rotateImageRight() {
  // Ensure angle range of 0 to 359 with "%" operator,

  // e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.

  //Grab Current
  rotation = (rotation + angle) % 360;

  A1.style.transform = `rotate(${rotation}deg)`;
  A2.style.transform = `rotate(${rotation}deg)`;
  A3.style.transform = `rotate(${rotation}deg)`;
  A4.style.transform = `rotate(${rotation}deg)`;
  A5.style.transform = `rotate(${rotation}deg)`;
}
function rotateImageLeft() {
    // Ensure angle range of 0 to 359 with "%" operator,
  
    // e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.
  
    rotation = (rotation + -angle) % 360;
  
    A1.style.transform = `rotate(${rotation}deg)`;
    A2.style.transform = `rotate(${rotation}deg)`;
    A3.style.transform = `rotate(${rotation}deg)`;
    A4.style.transform = `rotate(${rotation}deg)`;
    A5.style.transform = `rotate(${rotation}deg)`;
  }

  function rotateImageRightB() {
    // Ensure angle range of 0 to 359 with "%" operator,
  
    // e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.
  
    rotation = (rotation + angle) % 360;
  
    B1.style.transform = `rotate(${rotation}deg)`;
    B2.style.transform = `rotate(${rotation}deg)`;
    B3.style.transform = `rotate(${rotation}deg)`;
    B4.style.transform = `rotate(${rotation}deg)`;
    B5.style.transform = `rotate(${rotation}deg)`;
  }
  function rotateImageLeftB() {
      // Ensure angle range of 0 to 359 with "%" operator,
    
      // e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.
    
      rotation = (rotation + -angle) % 360;
    
      B1.style.transform = `rotate(${rotation}deg)`;
    B2.style.transform = `rotate(${rotation}deg)`;
    B3.style.transform = `rotate(${rotation}deg)`;
    B4.style.transform = `rotate(${rotation}deg)`;
    B5.style.transform = `rotate(${rotation}deg)`;
    }

    function rotateImageRightC() {
        // Ensure angle range of 0 to 359 with "%" operator,
      
        // e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.
      
        rotation = (rotation + angle) % 360;
      
        C1.style.transform = `rotate(${rotation}deg)`;
        C2.style.transform = `rotate(${rotation}deg)`;
        C3.style.transform = `rotate(${rotation}deg)`;
        C4.style.transform = `rotate(${rotation}deg)`;
        C5.style.transform = `rotate(${rotation}deg)`;
      }
      function rotateImageLeftC() {
          // Ensure angle range of 0 to 359 with "%" operator,
        
          // e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.
        
          rotation = (rotation + -angle) % 360;
        
        C1.style.transform = `rotate(${rotation}deg)`;
        C2.style.transform = `rotate(${rotation}deg)`;
        C3.style.transform = `rotate(${rotation}deg)`;
        C4.style.transform = `rotate(${rotation}deg)`;
        C5.style.transform = `rotate(${rotation}deg)`;
        }

        function rotateImageRightD() {
            // Ensure angle range of 0 to 359 with "%" operator,
          
            // e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.
          
            rotation = (rotation + angle) % 360;
          
            D1.style.transform = `rotate(${rotation}deg)`;
            D2.style.transform = `rotate(${rotation}deg)`;
            D3.style.transform = `rotate(${rotation}deg)`;
            D4.style.transform = `rotate(${rotation}deg)`;
            D5.style.transform = `rotate(${rotation}deg)`;
          }
          function rotateImageLeftD() {
              // Ensure angle range of 0 to 359 with "%" operator,
            
              // e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.
            
              rotation = (rotation + -angle) % 360;
            
            D1.style.transform = `rotate(${rotation}deg)`;
            D2.style.transform = `rotate(${rotation}deg)`;
            D3.style.transform = `rotate(${rotation}deg)`;
            D4.style.transform = `rotate(${rotation}deg)`;
            D5.style.transform = `rotate(${rotation}deg)`;
            }

            function rotateImageRightE() {
                // Ensure angle range of 0 to 359 with "%" operator,
              
                // e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.
              
                rotation = (rotation + angle) % 360;
              
                E1.style.transform = `rotate(${rotation}deg)`;
                E2.style.transform = `rotate(${rotation}deg)`;
                E3.style.transform = `rotate(${rotation}deg)`;
                E4.style.transform = `rotate(${rotation}deg)`;
                E5.style.transform = `rotate(${rotation}deg)`;
              }
              function rotateImageLeftE() {
                  // Ensure angle range of 0 to 359 with "%" operator,
                
                  // e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.
                
                  rotation = (rotation + -angle) % 360;
                
                E1.style.transform = `rotate(${rotation}deg)`;
                E2.style.transform = `rotate(${rotation}deg)`;
                E3.style.transform = `rotate(${rotation}deg)`;
                E4.style.transform = `rotate(${rotation}deg)`;
                E5.style.transform = `rotate(${rotation}deg)`;
                }
/*
// Access DOM element object
const rotated = document.getElementById('rotated');

// Rotate element by 90 degrees clockwise
rotated.style.transform = 'rotate(90deg)';

const current_rotation = 0;

document.querySelector(".rotate").addEventListener('click', function(){
	current_rotation += 90;
document.querySelector(".rotate").style.transform = 'rotate(' + current_rotation + 'deg)';
});
*/
