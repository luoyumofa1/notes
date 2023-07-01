import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,e as d}from"./app.4e77b1b0.js";const s={},l=d(`<h3 id="c-typedef用法" tabindex="-1"><a class="header-anchor" href="#c-typedef用法" aria-hidden="true">#</a> C++typedef用法</h3><p>1</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>    typedef int size;
    size first_num=1;
    size(third)=8;
    int second_num=2;
    cout&lt;&lt;first_num&lt;&lt;&quot;\\t&quot;&lt;&lt;second_num&lt;&lt;&quot;\\t&quot;&lt;&lt;third&lt;&lt;endl;
   //const int&amp; nu=100;
    typedef int* pint;
    int mm=30;
    pint m=&amp;mm;
    cout&lt;&lt;*m&lt;&lt;endl;
//结果
1	2	8
30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>typedef char (*PTRFUN)(int);
    PTRFUN pFun;
//等价于  char (*pFun)(int)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>typedef struct BiTNode
{
	TElemType data;
	struct BiTNode *lchild, *rchild;
}BiTNode, *BiTree;
//其中
typedef struct BiTNode BiTNode 将 struct BiTNode 这个类型重命名为 BiTNode

typedef struct BiTNode * BiTree 将 struct BiTNode * 这个类型重命名为 BiTree
即 struct BiTNode *p 声明的指针p中用于存放这个结构体类型变量的地址

BiTree p2 效果相同，p2这个指针也可存放这个结构体类型变量的地址！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>typedef的功能与define有些相似，</p><p>define作用域编译之前，主要是定义一个常量</p><p>而typedef作用于编译时，主要是为了取别名，使其更容易记忆</p>`,8),t=[l];function a(r,c){return i(),n("div",null,t)}const m=e(s,[["render",a],["__file","C++typedef.html.vue"]]);export{m as default};
