import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as a,e as n}from"./app.4e77b1b0.js";const t={},s=n(`<h3 id="ʹ�ַ�����ת��" tabindex="-1"><a class="header-anchor" href="#ʹ�ַ�����ת��" aria-hidden="true">#</a> ʹ�ַ�����ת��</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>string my=R&quot;(123\\n4)&quot;; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="���ι-123-n4" tabindex="-1"><a class="header-anchor" href="#���ι-123-n4" aria-hidden="true">#</a> ���Ϊ //123\\n4</h5><h5 id="��ҫʹ������ת�壬����ҫʹ���������ʽ" tabindex="-1"><a class="header-anchor" href="#��ҫʹ������ת�壬����ҫʹ���������ʽ" aria-hidden="true">#</a> ��Ҫʹ������ת�壬����Ҫʹ���������ʽ</h5><h4 id="c-���������ʽ��һщ�÷�" tabindex="-1"><a class="header-anchor" href="#c-���������ʽ��һщ�÷�" aria-hidden="true">#</a> C++���������ʽ��һЩ�÷�</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;regex&gt;
regex_replace
// ����ƥ�����е�Сд��ĸ,Ȼ��ƥ����ַ��滻��ָ���ַ�*
   string strSrc = &quot;Color is #ffAB11&quot;;
   regex rePattern1(&quot;[a-z]&quot;);
    string strReplace1 = &quot;*&quot;;
   cout&lt;&lt;regex_replace(strSrc, rePattern1, strReplace1)&lt;&lt;endl;
//���ΪC**** ** #**AB11


regex_search
std::string strSrc = &quot;Color is #ffAB11&quot;;

// regex_serch����Ҫ�������ַ�����ƥ��,ֻҪƥ�����е�pattern��Ϊ�ɹ�

std::regex rePattern1(&quot;#([a-f]{2})&quot;);
  	
std::cout&lt;&lt;std::boolalpha&lt;&lt;std::regex_search(strSrc, rePattern1)&lt;&lt;std::endl;


regex_match  //Ҫ�������ַ���ȫ������ƥ������
string strSrc = &quot;Color is #ff&quot;;
regex rePattern1(&quot;[A-z][a-z] {4}[a-z]{2} #[a-z]{2}&quot;);
cout&lt;&lt;regex_match(strSrc, rePattern1)&lt;&lt;endl;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="����regex-search��regex-match����ƥ��l����ֱ�����������ȷ��ι1�������ι0" tabindex="-1"><a class="header-anchor" href="#����regex-search��regex-match����ƥ��l����ֱ�����������ȷ��ι1�������ι0" aria-hidden="true">#</a> ����regex_search��regex_match����ƥ��Ľ����ֱ�����������ȷ��Ϊ1�������Ϊ0</h5><h5 id="��������j����boolalpha�������������ɵo�true����false" tabindex="-1"><a class="header-anchor" href="#��������j����boolalpha�������������ɵo�true����false" aria-hidden="true">#</a> ��������ǰ����boolalpha�������������ɵõ�true����false</h5><h5 id="std-cout-std-boolalpha-std-regex-search-strsrc-repattern1-std-endl" tabindex="-1"><a class="header-anchor" href="#std-cout-std-boolalpha-std-regex-search-strsrc-repattern1-std-endl" aria-hidden="true">#</a> std::cout&lt;&lt;std::boolalpha&lt;&lt;std::regex_search(strSrc, rePattern1)&lt;&lt;std::endl;</h5>`,9),d=[s];function i(l,c){return r(),a("div",null,d)}const h=e(t,[["render",i],["__file","C++正则.html.vue"]]);export{h as default};
