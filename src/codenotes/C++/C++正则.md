### ʹ�ַ�����ת��

```c++
string my=R"(123\n4)"; 
```

#####  ���Ϊ //123\n4

##### ��Ҫʹ������ת�壬����Ҫʹ��������ʽ

#### C++��������ʽ��һЩ�÷�

```c++
#include<regex>
regex_replace
// ����ƥ�����е�Сд��ĸ,Ȼ��ƥ����ַ��滻��ָ���ַ�*
   string strSrc = "Color is #ffAB11";
   regex rePattern1("[a-z]");
    string strReplace1 = "*";
   cout<<regex_replace(strSrc, rePattern1, strReplace1)<<endl;
//���ΪC**** ** #**AB11


regex_search
std::string strSrc = "Color is #ffAB11";

// regex_serch����Ҫ�������ַ�����ƥ��,ֻҪƥ�����е�pattern��Ϊ�ɹ�

std::regex rePattern1("#([a-f]{2})");
  	
std::cout<<std::boolalpha<<std::regex_search(strSrc, rePattern1)<<std::endl;


regex_match  //Ҫ�������ַ���ȫ������ƥ������
string strSrc = "Color is #ff";
regex rePattern1("[A-z][a-z] {4}[a-z]{2} #[a-z]{2}");
cout<<regex_match(strSrc, rePattern1)<<endl;
```

##### ����regex_search��regex_match����ƥ��Ľ����ֱ�����������ȷ��Ϊ1�������Ϊ0

##### ��������ǰ����boolalpha�������������ɵõ�true����false

##### std::cout<<std::boolalpha<<std::regex_search(strSrc, rePattern1)<<std::endl;



