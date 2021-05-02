class Box{
    constructor(x, y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options)
        this.width = 100
        this.height = 100
        World.add(wbWorld, this.body)
        console.log(this.body)

    }
    display(){
       push()
       translate(this.body.position.x, this.body.position.y)
       rotate(this.body.angle)
       rectMode(CENTER)
       fill("white")
       stroke("blue")
       strokeWeight(5)
       rect(0, 0, this.width, this.height)
       pop()
    }
}