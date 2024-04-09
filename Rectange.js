let Rectangle={
    width:10,
    length:20,
    area:function(){
         return this.width*this.length
    },
    perimeter:function(){
       return  2*(this.length+this.width)
    }

}
 let a=Rectangle.perimeter()
 console.log(a)