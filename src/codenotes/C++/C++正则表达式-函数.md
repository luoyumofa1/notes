# C++正则表达式

### C++ 的正则表达式标准库提供了多种操作，可以对字符串进行匹配、替换、搜索等操作

#### **std::regex_match**(字符匹配)

##### std::regex_match 函数用于对一个字符串进行匹配，判断该字符串是否符合指定的正则表达式。该函数的语法如下

```c++
bool std::regex_match(const std::string& str, const std::regex& re);
```
##### 其中 str 表示待匹配的字符串，re 表示正则表达式。函数返回一个布尔值，表示匹配结果。例如下面的代码可以用来判断字符串 s 是否是一个数字：

```c++
#include <regex>
#include <iostream>
using namespace std;

int main() {
    string s = "123";
    regex re("\\d+");
    if (regex_match(s, re)) {
        cout << "Match!" << endl;
    } else {
        cout << "Not match!" << endl;
    }
    return 0;
}

```



#### std::regex_replace(字符替换)

##### std::regex_replace用于对一个字符串进行替换，将符合指定正则表达式的部分替换为指定的字符串

```c++
std::string std::regex_replace(const std::string& str, const std::regex& re, const std::string& replacement);
```

##### 其中 str 表示待替换的字符串，re 表示正则表达式，replacement 表示[替换字符串](https://so.csdn.net/so/search?q=替换字符串&spm=1001.2101.3001.7020)。函数返回一个新的字符串，表示替换后的结果。例如下面的代码可以用来将字符串中的数字替换为 ***：

```c++

#include <regex>
#include <iostream>
using namespace std;

int main() {
    string s = "123 abc 456 def";
    regex re("\\d+");
    string result = regex_replace(s, re, "***");
    cout << result << endl;  // 输出 "*** abc *** def"
    return 0;
}
```



#### std::regex_search(字符搜索)

##### std::regex_search 函数用于在一个字符串中搜索符合指定正则表达式的子字符串。该函数的语法如下：

```c++
bool std::regex_search(const std::string& str, const std::regex& re);
```

##### 其中 str 表示待搜索的字符串，re 表示正则表达式。函数返回一个布尔值，表示搜索结果。例如下面的代码可以用来搜索字符串 s 中是否包含数字：

```c++
#include <regex>
#include <iostream>
using namespace std;

int main() {
    string s = "123 abc";
    regex re("\\d+");
    if (regex_search(s, re)) {
        cout << "Match!" << endl;
    } else {
        cout << "Not match!" << endl;
    }
    return 0;
}
```




