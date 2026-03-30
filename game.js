const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const spriteImg = new Image();

spriteImg.src = 'https://mail.google.com/mail/u/0?ui=2&ik=7aa4408b5a&attid=0.1&permmsgid=msg-f:1859021335640218930&th=19cc920e24b51d32&view=fimg&fur=ip&permmsgid=msg-f:1859021335640218930&sz=s0-l75-ft&attbid=ANGjdJ_5lZrzC2NlwMFJdmN-z_ik-QSj0gJInX0EtahxTxB3Fm2enhMrv5epm7Ca17n1nhlYI7mxiQtyhpjrg6a6uAyPpF8lS37Ex6glNI35jdYUmYJs7pvLZVtN4B8&disp=emb&realattid=ii_mmgjerc60&zw'; 

function draw() {
    // Background
    if (tx.fillRect(0, 0, canvas.width, canvas.height);) {
        ctx.fillStyle = "#4CAF50"; // grass outside
    } else {
        ctx.fillStyle = "#D2B48C"; // brown floor inside
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);

let player = {
    x: canvas.width / 2 - 25,
    y: canvas.height / 2 - 25,
    width: 60, // You may need to adjust these based on the URL image size
    height: 60,
    speed: 7
};


const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");

        // 1. THE IMAGE (Using a web address)
        const spriteImg = new Image();
        spriteImg.src = 'https://ci3.googleusercontent.com/mail-img-att/AGAZnRqVmIDryyDBH6vxfaUaqX-x-wNvxLJPYITfSWmHNWaIbOkxMa_RtSU3hlAno_OhMwL8yiULDTpqt4v5cCIB0JYpaCkF--oTdRb6Jp1iBqXX_-VfxoTmN3X5ZZdgetSjIV85L-uv50WdFE1TOG-CuQpCe6KosLY0SHz22TXbcr7hsUj21VnFMXRMklvGdeKq-ETYSpGWRLa5azWxdlhI4od0J1uZRf0NFCOud5QpRzAcxTCDqJ26QuOvFRWVBfYbY7OCMgxRecVEuvp_tj8zqctGv8P0Ef82FopdiiwJ7XmJ-ItUYBOOn21ptBjtsbqdMY8HpTYiiIMGBrb2MHz5trqk4KBoOI0mvK4CRzfR1bc3LCDImQv1PV67iflSty3VObU0gLn1t9U1lpX6HaRNe3BwHF6D-SEybeJmKV3825hlMg5IN8mpOFIqo9fZdiB7bOvUkVGjsm1LSeh0UwcWKEtIxzAYmNnF0viGtsrOFLK21xbEc7RmxdYIxAwggaIrXjpq9XEAlUNx6uuCOdGBL33xa6j82zCSIC7FcJIwm7yXqQptlfXxJdhtj8kqrlCyooogHWD_BI0g81lLnyVcdADHAHDJGz-aWvHh_LDf6MOsqt7Aufn4TRZplMMc2V9wP86xYpVTEOC--Mx4r111N-vUe7ZHSNxHh7vKEWcUw5aJHSBnVtE3kDwPotD8RQkZ8aY8zxnAwPQaLESjuDbSvAReBteEshqYfmTjO4Lj5_MEb5w5-IhuK88dqj4SdovScAgpWGxsTL0F64ofMqERFUFYB_kvQ00OPkKMTD-257oaZzPhTEsxt335OFcmMgs_FQC0olVbGtaI_2v7KsBlxqaAqJH7Gu5KQ6BxaoP40WN7N0CLchuS_QUdwz-C_8OgXY4N8uswcvhs_9i6W63r9S6qxVqxAPC559N_f8jdKy9I3LXoez7hQkqBGSP4DCi2w84mpzHh5EHoI4UylvI5U2TPzKP-Z-dWfvx7dGOiK20177FjGW93wyBwcW3r_npJ6ciCknFGd4O5nHo1GVpFT-R6wqqNF6EAh2IT9YIfMb1oKdGK8Q=s0-l75-ft'; 

        // 2. THE PLAYER DATA
        let player = {
            x: 270,
            y: 170,
            width: 70,
            height: 70,
            speed: 8
        };

        // 3. THE INPUT LOGIC
        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight") player.x += player.speed;
            if (e.key === "ArrowLeft") player.x -= player.speed;
            if (e.key === "ArrowUp") player.y -= player.speed;
            if (e.key === "ArrowDown") player.y += player.speed;
            
            
            if (player.x < 0) player.x = 0;
            if (player.y < 0) player.y = 0;
            if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
            if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
        });

        // 4. THE DRAWING LOOP
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Wipe screen
            ctx.drawImage(spriteImg, player.x, player.y, player.width, player.height); // Draw Sprite
            requestAnimationFrame(draw); // Run again 60 times a second
        }

        
        spriteImg.onload = () => {
            draw();
        };

        
        spriteImg.onerror = () => {
            alert("Image failed to load! Check the URL.");
        };
        const sprite2Img = new Image();
        npcImg.src = 'https://codehs.com/uploads/db97b92208a0e986335053626abad081'; 
        let npc = {
            x: 100,
            y: 750,
            width: 70,
            height: 70
        const spite3Img = new Image();
        npcImg =''
        let npc = {
            x: 150,
            y: 300,
            width: 70
            height: 70
            
        }
        };
        
