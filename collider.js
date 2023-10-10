AFRAME.registerComponent("flying-birds", {
    init:function(){
        for( var i = 1; i < 40; i++){
            var id = `birds${i}`
            var posX = (Math.random()*2000 + (-1000))
            var posY = (Math.random()*3 + (-1))
            var posZ = (Math.random() *1500 + (-1000))
            var position = {x: posX, y: posY, z: posZ}
            this.create_birds(id, position)
        }
    }, 
    create_birds: function(id, position){
        var terrainEl = document.querySelecter("#terrain") 
        var birdsEl = document.createElement("a-entity")
        birdsEl.setAttribute("position", position)
        birdsEl.setAttribute("id", id)
        birdsEl.setAttribute("scene-gltf", "flying-birds", "birds")
        terrainEl.appendChild(birdsEl)
    }
})