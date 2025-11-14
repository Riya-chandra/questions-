#include <iostream>
using namespace std;

//same function name but diff parameters
class OverloadingExm{
public:
  int x;

  OverloadingExm(int x){
   this->x=x;

  }
  OverloadingExm operator++(){ //prefix
   x++;
   return *this;
  }
// Prefix ++ never takes a parameter
// Postfix c++ always takes an int dummy parameter
  OverloadingExm operator++(int){ //postfix
    OverloadingExm temp=*this;
    x++;
    return temp;
  }
};

int main(){
    OverloadingExm c(5);
    ++c;
    c++;
    cout<<c.x;
}