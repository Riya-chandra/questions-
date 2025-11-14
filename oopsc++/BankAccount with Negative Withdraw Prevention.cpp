// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
// BankAccount with Negative Withdraw Prevention

class BankAccount {
private:
    int balance;

public:
    BankAccount(int bal) {
        balance = bal;
    }

    void deposit(int amt) {
        balance += amt;
    }

    void withdraw(int amt) {
        if (amt > balance) {
            cout << "Error: Insufficient balance!\n";
            return;
        }
        balance -= amt;
    }
    void show(){
        cout<<"balance:"<<balance<<endl;
    }
};
    int main(){
       BankAccount b(500);
       b.deposit(5400);
       b.withdraw(122222);
       b.show();
       
    }
    
    
    
    
    
    
    
    
    //output 
//     ERROR!
// Error: Insufficient balance!
// balance:5900


    
    
    
    
    
    
    
    
    
    