### 使字符串不转义

```c++
string my=R"(123\n4)"; 
```

#####  结果为 //123\n4

##### 若要使变量不转义，则需要使用正则表达式

#### C++中正则表达式的一些用法

```c++
#include<regex>
regex_replace
// 首先匹配所有的小写字母,然后将匹配的字符替换成指定字符*
   string strSrc = "Color is #ffAB11";
   regex rePattern1("[a-z]");
    string strReplace1 = "*";
   cout<<regex_replace(strSrc, rePattern1, strReplace1)<<endl;
//结果为C**** ** #**AB11


regex_search
std::string strSrc = "Color is #ffAB11";

// regex_serch并不要求整个字符串都匹配,只要匹配现有的pattern即为成功

std::regex rePattern1("#([a-f]{2})");
  	
std::cout<<std::boolalpha<<std::regex_search(strSrc, rePattern1)<<std::endl;


regex_match  //要求整个字符串全部符合匹配条件
string strSrc = "Color is #ff";
regex rePattern1("[A-z][a-z] {4}[a-z]{2} #[a-z]{2}");
cout<<regex_match(strSrc, rePattern1)<<endl;
```

##### 对于regex_search与regex_match进行匹配的结果若直接输出则是正确就为1，错误就为0

##### 如何在输出前加上boolalpha，如下例，即可得到true或者false

##### std::cout<<std::boolalpha<<std::regex_search(strSrc, rePattern1)<<std::endl;



