// ✔ Jab object banana allowed na ho
// (kyunki class incomplete hai.
// ✔ Jab common interface dena ho
// (example: area(), start(), draw())
// ✔ Jab derived class ko function implement karna force karna ho
// (compulsory rules)
// ✔ Jab design future-proof chahiye
// (abstract class = blueprint)

#include <iostream>
using namespace std;

class Shape{
public:
virtual float area()=0;  //shape ek abstract class hai 

};
 class Rect:public Shape{
    public:
    float w ,h;
    Rect(float w, float h) : w(w), h(h) {}
    float area(){
       return  w*h;
    }
 };
 class circle: public Shape{
    public:
    float radius;
    circle(float radius):radius(radius){}
    float area(){
        return 3.14 *radius * radius;
    }
 };
 class square: public Shape{
    public:
    float side;
    //  Constructor added (GALTI FIX)
    square(float side) : side(side) {}
    float area(){
        return side*side;
    }
 };

 int main(){
    // Shape circle(5); //shape ek abstract class hai that why we cannot declare as a obj
Shape* s;

s = new circle(5);
cout << s->area();

s = new Rect(3,4);
cout << s->area();

s = new square(6);
cout << s->area();


 } 
