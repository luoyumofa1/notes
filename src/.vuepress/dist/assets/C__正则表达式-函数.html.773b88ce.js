import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as d,a as n,b as e,d as t,e as s,r as l}from"./app.bf1fe36d.js";const c={},u=s(`<h1 id="c-正则表达式" tabindex="-1"><a class="header-anchor" href="#c-正则表达式" aria-hidden="true">#</a> C++正则表达式</h1><h3 id="c-的正则表达式标准库提供了多种操作-可以对字符串进行匹配、替换、搜索等操作" tabindex="-1"><a class="header-anchor" href="#c-的正则表达式标准库提供了多种操作-可以对字符串进行匹配、替换、搜索等操作" aria-hidden="true">#</a> C++ 的正则表达式标准库提供了多种操作，可以对字符串进行匹配、替换、搜索等操作</h3><h4 id="std-regex-match-字符匹配" tabindex="-1"><a class="header-anchor" href="#std-regex-match-字符匹配" aria-hidden="true">#</a> <strong>std::regex_match</strong>(字符匹配)</h4><h5 id="std-regex-match-函数用于对一个字符串进行匹配-判断该字符串是否符合指定的正则表达式。该函数的语法如下" tabindex="-1"><a class="header-anchor" href="#std-regex-match-函数用于对一个字符串进行匹配-判断该字符串是否符合指定的正则表达式。该函数的语法如下" aria-hidden="true">#</a> std::regex_match 函数用于对一个字符串进行匹配，判断该字符串是否符合指定的正则表达式。该函数的语法如下</h5><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>bool std::regex_match(const std::string&amp; str, const std::regex&amp; re);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="其中-str-表示待匹配的字符串-re-表示正则表达式。函数返回一个布尔值-表示匹配结果。例如下面的代码可以用来判断字符串-s-是否是一个数字" tabindex="-1"><a class="header-anchor" href="#其中-str-表示待匹配的字符串-re-表示正则表达式。函数返回一个布尔值-表示匹配结果。例如下面的代码可以用来判断字符串-s-是否是一个数字" aria-hidden="true">#</a> 其中 str 表示待匹配的字符串，re 表示正则表达式。函数返回一个布尔值，表示匹配结果。例如下面的代码可以用来判断字符串 s 是否是一个数字：</h5><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;regex&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    string s = &quot;123&quot;;
    regex re(&quot;\\\\d+&quot;);
    if (regex_match(s, re)) {
        cout &lt;&lt; &quot;Match!&quot; &lt;&lt; endl;
    } else {
        cout &lt;&lt; &quot;Not match!&quot; &lt;&lt; endl;
    }
    return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="std-regex-replace-字符替换" tabindex="-1"><a class="header-anchor" href="#std-regex-replace-字符替换" aria-hidden="true">#</a> std::regex_replace(字符替换)</h4><h5 id="std-regex-replace用于对一个字符串进行替换-将符合指定正则表达式的部分替换为指定的字符串" tabindex="-1"><a class="header-anchor" href="#std-regex-replace用于对一个字符串进行替换-将符合指定正则表达式的部分替换为指定的字符串" aria-hidden="true">#</a> std::regex_replace用于对一个字符串进行替换，将符合指定正则表达式的部分替换为指定的字符串</h5><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>std::string std::regex_replace(const std::string&amp; str, const std::regex&amp; re, const std::string&amp; replacement);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),o={id:"其中-str-表示待替换的字符串-re-表示正则表达式-replacement-表示替换字符串。函数返回一个新的字符串-表示替换后的结果。例如下面的代码可以用来将字符串中的数字替换为",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#其中-str-表示待替换的字符串-re-表示正则表达式-replacement-表示替换字符串。函数返回一个新的字符串-表示替换后的结果。例如下面的代码可以用来将字符串中的数字替换为","aria-hidden":"true"},"#",-1),m={href:"https://so.csdn.net/so/search?q=%E6%9B%BF%E6%8D%A2%E5%AD%97%E7%AC%A6%E4%B8%B2&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},h=s(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>
#include &lt;regex&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    string s = &quot;123 abc 456 def&quot;;
    regex re(&quot;\\\\d+&quot;);
    string result = regex_replace(s, re, &quot;***&quot;);
    cout &lt;&lt; result &lt;&lt; endl;  // 输出 &quot;*** abc *** def&quot;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="std-regex-search-字符搜索" tabindex="-1"><a class="header-anchor" href="#std-regex-search-字符搜索" aria-hidden="true">#</a> std::regex_search(字符搜索)</h4><h5 id="std-regex-search-函数用于在一个字符串中搜索符合指定正则表达式的子字符串。该函数的语法如下" tabindex="-1"><a class="header-anchor" href="#std-regex-search-函数用于在一个字符串中搜索符合指定正则表达式的子字符串。该函数的语法如下" aria-hidden="true">#</a> std::regex_search 函数用于在一个字符串中搜索符合指定正则表达式的子字符串。该函数的语法如下：</h5><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>bool std::regex_search(const std::string&amp; str, const std::regex&amp; re);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="其中-str-表示待搜索的字符串-re-表示正则表达式。函数返回一个布尔值-表示搜索结果。例如下面的代码可以用来搜索字符串-s-中是否包含数字" tabindex="-1"><a class="header-anchor" href="#其中-str-表示待搜索的字符串-re-表示正则表达式。函数返回一个布尔值-表示搜索结果。例如下面的代码可以用来搜索字符串-s-中是否包含数字" aria-hidden="true">#</a> 其中 str 表示待搜索的字符串，re 表示正则表达式。函数返回一个布尔值，表示搜索结果。例如下面的代码可以用来搜索字符串 s 中是否包含数字：</h5><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;regex&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    string s = &quot;123 abc&quot;;
    regex re(&quot;\\\\d+&quot;);
    if (regex_search(s, re)) {
        cout &lt;&lt; &quot;Match!&quot; &lt;&lt; endl;
    } else {
        cout &lt;&lt; &quot;Not match!&quot; &lt;&lt; endl;
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function g(b,x){const a=l("ExternalLinkIcon");return i(),d("div",null,[u,n("h5",o,[v,e(" 其中 str 表示待替换的字符串，re 表示正则表达式，replacement 表示"),n("a",m,[e("替换字符串"),t(a)]),e("。函数返回一个新的字符串，表示替换后的结果。例如下面的代码可以用来将字符串中的数字替换为 ***：")]),h])}const f=r(c,[["render",g],["__file","C++正则表达式-函数.html.vue"]]);export{f as default};
