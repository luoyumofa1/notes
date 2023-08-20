import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as e,e as l}from"./app.bf1fe36d.js";const s={},d=l(`<h2 id="stl" tabindex="-1"><a class="header-anchor" href="#stl" aria-hidden="true">#</a> STL</h2><p>1 Vector</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//申请一个动态整型数组，数组的长度为3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// p指向一个值为3的int数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>#include &lt;iostream&gt;
#include&lt;vector&gt;
using namespace std;
int main() {


   vector&lt;int*&gt; vecTemp;
for (int i=0; i&lt;10; i++)
     {
	int* nTemp =new int;
    //这条语句每次循环所分配的地址是不同的
	cout&lt;&lt;&quot;第&quot;&lt;&lt;i+1&lt;&lt;&quot;次的地址先前：&quot;&lt;&lt;nTemp&lt;&lt;endl;
 	*nTemp =i;//这句是在这个地址的基础上更改所指的内容
    //上句如果改为nTemp=&amp;i,由于i为形参，每次循环结束将会自动消失，所以十次循环共用一个地址（上次的消失之后接着创建）
	cout&lt;&lt;&quot;第&quot;&lt;&lt;i+1&lt;&lt;&quot;次的地址：&quot;&lt;&lt;nTemp&lt;&lt;endl;
	cout&lt;&lt;&quot;第&quot;&lt;&lt;i+1&lt;&lt;&quot;次的值：&quot;&lt;&lt;*nTemp&lt;&lt;endl;
	vecTemp.push_back(nTemp);
	
	
     }
    
    for(auto i=vecTemp.begin();i!=vecTemp.end();i++)
    {
        cout&lt;&lt;**i&lt;&lt;endl;
    }

 	cout  &lt;&lt; &quot;test\\n&quot;;
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>assign函数</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>#include&lt;iostream&gt;
#include&lt;vector&gt;
using namespace std;

int main()
{
	vector&lt;int&gt;ls;
	vector&lt;int&gt;ls1;

	for(int i=0; i&lt;20; ++i)
	{
		ls.push_back(i);
	}
	vector&lt;int&gt;::iterator lr = ls.begin();
	for(; lr != ls.end(); ++lr)
	{
		cout&lt;&lt;*lr&lt;&lt;&quot; &quot;;
	}
	cout&lt;&lt;endl;
	ls1.assign(ls.begin(),ls.begin()+9);

	for(lr = ls1.begin(); lr !=ls1.end(); ++lr)
	{
		cout&lt;&lt;*lr&lt;&lt;&quot; &quot;;
	}
	cout&lt;&lt;endl;
	
	ls.assign(10,7);
	for(lr = ls.begin(); lr !=ls.end(); ++lr)
	{
		cout&lt;&lt;*lr&lt;&lt;&quot; &quot;;
	}
	cout&lt;&lt;endl;
	return 0;
}
//结果
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
0 1 2 3 4 5 6 7 8
7 7 7 7 7 7 7 7 7 7

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),a=[d];function v(t,c){return i(),e("div",null,a)}const m=n(s,[["render",v],["__file","index.html.vue"]]);export{m as default};
