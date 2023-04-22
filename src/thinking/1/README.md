## STL

1 Vector

```cpp
int *p = new int[3]; //申请一个动态整型数组，数组的长度为3
```

```cpp
int *p = new int(3); // p指向一个值为3的int数
```

```C++
#include <iostream>
#include<vector>
using namespace std;
int main() {


   vector<int*> vecTemp;
for (int i=0; i<10; i++)
     {
	int* nTemp =new int;
    //这条语句每次循环所分配的地址是不同的
	cout<<"第"<<i+1<<"次的地址先前："<<nTemp<<endl;
 	*nTemp =i;//这句是在这个地址的基础上更改所指的内容
    //上句如果改为nTemp=&i,由于i为形参，每次循环结束将会自动消失，所以十次循环共用一个地址（上次的消失之后接着创建）
	cout<<"第"<<i+1<<"次的地址："<<nTemp<<endl;
	cout<<"第"<<i+1<<"次的值："<<*nTemp<<endl;
	vecTemp.push_back(nTemp);
	
	
     }
    
    for(auto i=vecTemp.begin();i!=vecTemp.end();i++)
    {
        cout<<**i<<endl;
    }

 	cout  << "test\n";
	return 0;
}
//结果
第1次的地址先前：0x1164e70
第1次的地址：0x1164e70
第1次的值：0
第2次的地址先前：0x1165ec0
第2次的地址：0x1165ec0
第2次的值：1
第3次的地址先前：0x1165ea0
第3次的地址：0x1165ea0
第3次的值：2
第4次的地址先前：0x1165ee0
第4次的地址：0x1165ee0
第4次的值：3
第5次的地址先前：0x1165f30
第5次的地址：0x1165f30
第5次的值：4
第6次的地址先前：0x1165fa0
第6次的地址：0x1165fa0
第6次的值：5
第7次的地址先前：0x1165fc0
第7次的地址：0x1165fc0
第7次的值：6
第8次的地址先前：0x1165fe0
第8次的地址：0x1165fe0
第8次的值：7
第9次的地址先前：0x1166000
第9次的地址：0x1166000
第9次的值：8
第10次的地址先前：0x11660b0
第10次的地址：0x11660b0
第10次的值：9
0
1
2
3
4
5
6
7
8
9

```

assign函数

```C++
#include<iostream>
#include<vector>
using namespace std;

int main()
{
	vector<int>ls;
	vector<int>ls1;

	for(int i=0; i<20; ++i)
	{
		ls.push_back(i);
	}
	vector<int>::iterator lr = ls.begin();
	for(; lr != ls.end(); ++lr)
	{
		cout<<*lr<<" ";
	}
	cout<<endl;
	ls1.assign(ls.begin(),ls.begin()+9);

	for(lr = ls1.begin(); lr !=ls1.end(); ++lr)
	{
		cout<<*lr<<" ";
	}
	cout<<endl;
	
	ls.assign(10,7);
	for(lr = ls.begin(); lr !=ls.end(); ++lr)
	{
		cout<<*lr<<" ";
	}
	cout<<endl;
	return 0;
}
//结果
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
0 1 2 3 4 5 6 7 8
7 7 7 7 7 7 7 7 7 7

```

