### C++typedef用法

1 

```C++
    typedef int size;
    size first_num=1;
    size(third)=8;
    int second_num=2;
    cout<<first_num<<"\t"<<second_num<<"\t"<<third<<endl;
   //const int& nu=100;
    typedef int* pint;
    int mm=30;
    pint m=&mm;
    cout<<*m<<endl;
//结果
1	2	8
30
```



```C++
typedef char (*PTRFUN)(int);
    PTRFUN pFun;
//等价于  char (*pFun)(int)
```



```C++
typedef struct BiTNode
{
	TElemType data;
	struct BiTNode *lchild, *rchild;
}BiTNode, *BiTree;
//其中
typedef struct BiTNode BiTNode 将 struct BiTNode 这个类型重命名为 BiTNode

typedef struct BiTNode * BiTree 将 struct BiTNode * 这个类型重命名为 BiTree
即 struct BiTNode *p 声明的指针p中用于存放这个结构体类型变量的地址

BiTree p2 效果相同，p2这个指针也可存放这个结构体类型变量的地址！
```

typedef的功能与define有些相似，

define作用域编译之前，主要是定义一个常量

而typedef作用于编译时，主要是为了取别名，使其更容易记忆

