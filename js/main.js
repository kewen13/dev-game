$(document).ready(function main() {
    var renderer = new PIXI.CanvasRenderer(800, 600); 

    document.body.appendChild(renderer.view);

    var stage = new PIXI.Stage;

    var tex = PIXI.Texture.fromImage("im/im.png");
    var bunny = new PIXI.Sprite(tex);

    bunny.position.x = 400;
    bunny.position.y = 300;

    bunny.scale.x = 2;
    bunny.scale.y = 2;

    stage.addChild(bunny);

    requestAnimationFrame(animate);

    function animate() {
        bunny.rotation += 0.01;

        renderer.render(stage);

        requestAnimationFrame(animate);
    }
});
