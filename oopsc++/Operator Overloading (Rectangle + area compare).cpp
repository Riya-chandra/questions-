// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

//add 2 rec area odd comapre area using == 
class RectArea{
    private :
   int width;
   int height;
    
    public:
    RectArea(int width,int height){
        width=width;
        height=height;
    }
    int area() const {
        return width * height;
    }
    RectArea operator+(const RectArea &summation){
       int total=this->area()+summation.area();
       return RectArea(1,total);
    }   
     bool operator==(const RectArea &other) {
        return this->area() == other.area();    
    }
};


    
    int main(){
        RectArea r1(4,9);
        RectArea r2(4,9);
        RectArea r3=r1+r2;
        cout<< r3.area()<<endl;
        cout<< (r1==r2)<<endl;
    }
    
    // output
//  0
// 1

    
    
    
    
    
    
    
    
    
    
    
    