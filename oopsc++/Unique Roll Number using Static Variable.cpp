#include <iostream>
using namespace std;


class Student{
 private:
   static int counter;
   int rollno; //number of candidates
   
 public:
 Student(){
    rollno=counter++;
 }
 void printRollNO(){
    cout<<"Roll:"<<rollno<<endl;
 }
  
};

int main (){
    Student s1,s2,s3;
    s1.printRollNO();
    s2.printRollNO();
    s3.printRollNO();
}