import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as e,e as i}from"./app.bf1fe36d.js";const d={},t=i(`<h1 id="指针delete后要设置为null" tabindex="-1"><a class="header-anchor" href="#指针delete后要设置为null" aria-hidden="true">#</a> 指针delete后要设置为NULL</h1><h4 id="如果直接p-null-而不先-delete-p。那么p的地址不可被覆盖-造成内存泄漏-内存不可以再使用-。" tabindex="-1"><a class="header-anchor" href="#如果直接p-null-而不先-delete-p。那么p的地址不可被覆盖-造成内存泄漏-内存不可以再使用-。" aria-hidden="true">#</a> 如果直接p=null,而不先 delete p。那么p的地址不可被覆盖，造成内存泄漏(内存不可以再使用)。</h4><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>#include &lt;iostream&gt;
using namespace std;
int main() 
{
    int *p=new int; 
    *p=3;
    cout&lt;&lt;&quot;将3赋给p的地址后，指针p读取的地址：&quot;&lt;&lt;p&lt;&lt;endl;
    cout&lt;&lt;&quot;将3赋给p的地址后，指针p读取的值：&quot;&lt;&lt;*p&lt;&lt;endl;
    delete p;
    cout&lt;&lt;&quot;删除空间后，指针p读取的值：&quot;&lt;&lt;*p&lt;&lt;endl;
    cout&lt;&lt;&quot;删除空间后，指针p读取的地址：&quot;&lt;&lt;p&lt;&lt;endl;
    long *p1=new long;
    *p1=100;
    cout&lt;&lt;&quot;创建新空间后，指针p中保存的地址：&quot;&lt;&lt;p&lt;&lt;endl;
    cout&lt;&lt;&quot;指向新空间的指针p1保存的地址：&quot;&lt;&lt;p1&lt;&lt;endl;
    cout&lt;&lt;&quot;指向新空间的指针p1保存的值：&quot;&lt;&lt;*p1&lt;&lt;endl;
    *p=23;
    cout&lt;&lt;&quot;将23赋给p的地址后，指针p读取的值：&quot;&lt;&lt;*p&lt;&lt;endl;
    cout&lt;&lt;&quot;将23赋给p的地址后，指针p1读取的值：&quot;&lt;&lt;*p1&lt;&lt;endl;
    cout&lt;&lt;&quot;将23赋给p的地址后，指针p读取的地址：&quot;&lt;&lt;p&lt;&lt;endl;
    delete p1;
    return 0;
}
//结果
将3赋给p的地址后，指针p读取的地址：0x1d56e70
将3赋给p的地址后，指针p读取的值：3
删除空间后，指针p读取的值：0
删除空间后，指针p读取的地址：0x1d56e70
创建新空间后，指针p中保存的地址：0x1d56e70
指向新空间的指针p1保存的地址：0x1d56e70
指向新空间的指针p1保存的值：100
将23赋给p的地址后，指针p读取的值：23
将23赋给p的地址后，指针p1读取的值：23
将23赋给p的地址后，指针p读取的地址：0x1d56e70
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我们在删除一个指针之后，编译器只会释放该指针所指向的内存空间，而不会删除这个指针本身。</strong></p><p>虽然程序的第8行已经将指针p删除了，但是在监视窗口中p仍然存在，只是*p所指向的值不再是原来的3了，而是一个随机数</p><p>在程序的第10行我们又创建了一个long型的指针p1。在12行与13行的输出中我们惊奇地发现，指针p保存的地址居然和指针p1保存的地址一模一样！这个就说明了指针p和指针p1都指向内存的同一个地方！！！出现这种状况的原因其实是由于编译器。**编译器默认将释放掉的内存空间回收然后分配给新开辟的空间。**所以在第11行由于我们新开辟了一个可以保存long型变量的空间并且由p1来指向它，那么这里的p1指向的其实就是在程序第8行释放掉的内存空间，即p指向的内存空间！所以，这就导致了两个指针同时指向同一个内存空间。这是多不安全的一件事情啊！要知道，我们是把指针p删了的啊！如果再重新对<em>p进行赋值操作，那么不是会连着</em>p1一起改动么？</p><p>果然，让我们担心的事情出现了。我们明明在程序的第11行中定义了<em>p1的值为100，但是在输出上面，指针p1读取的值竟然也是23。这个原因就是因为野指针p造成的。我们可以看到，在程序的第14行我们将23赋给了</em>p。又由于p和p1指向的是同一块内存单元，所以在这里相当于也将p1所指向的内存单元中的值（原来是100），改成了23！这样必然会导致程序的出错</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>#include &lt;iostream&gt;
using namespace std;
int main() 
{
    int *p=new int; 
    *p=3;
    cout&lt;&lt;&quot;p删除前的地址：&quot;&lt;&lt;p&lt;&lt;endl;
    cout&lt;&lt;&quot;p删除前的值：&quot;&lt;&lt;*p&lt;&lt;endl;
    delete p;
    cout&lt;&lt;&quot;p删除后的地址：&quot;&lt;&lt;p&lt;&lt;endl;
    cout&lt;&lt;&quot;p删除后的值：&quot;&lt;&lt;*p&lt;&lt;endl;
    p=nullptr;
    cout&lt;&lt;&quot;p指空后的地址：&quot;&lt;&lt;p&lt;&lt;endl;
   // cout&lt;&lt;&quot;p指空后的值：&quot;&lt;&lt;*p&lt;&lt;endl;
    int *pp=new int; 
    *pp=5;
     cout&lt;&lt;&quot;pp删除前的地址：&quot;&lt;&lt;pp&lt;&lt;endl;
    cout&lt;&lt;&quot;pp删除前的值：&quot;&lt;&lt;*pp&lt;&lt;endl;
     delete pp;
    cout&lt;&lt;&quot;pp删除后的地址：&quot;&lt;&lt;pp&lt;&lt;endl;
    cout&lt;&lt;&quot;pp删除后的值：&quot;&lt;&lt;*pp&lt;&lt;endl;
     pp=nullptr;
    cout&lt;&lt;&quot;pp删除后的地址：&quot;&lt;&lt;pp&lt;&lt;endl;
    // cout&lt;&lt;&quot;pp删除后的值：&quot;&lt;&lt;*pp&lt;&lt;endl;
    //*pp=10;
    //cout&lt;&lt;*pp&lt;&lt;&quot;\\t&quot;&lt;&lt;*p;
    //这段代码加上会报错，说明已经指空的指针不能赋值不然就报错
    return 0;
}
//结果
p删除前的地址：0x1690e70
p删除前的值：3
p删除后的地址：0x1690e70
p删除后的值：0
p指空后的地址：0
pp删除前的地址：0x1690e70
pp删除前的值：5
pp删除后的地址：0x1690e70
pp删除后的值：0
pp删除后的地址：0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="计算机上删除数据的方式-删除数据-视频-音乐-文件等-计算机并不会把存储数据的硬盘区域-或者是内存-的内容擦除消去-而是将内容标记为可覆盖-这时候我们就不能再访问到数据-而这些可覆盖据数据会留在原来的硬盘区域直到被新的数据逐渐覆盖。-所以-删除了数据之后-只要没有对硬盘进行过多的操作-还是有可能复原数据的-所以-当我删除不可告人的东西时就要反复下载东西填充硬盘吗-●ˇ∀ˇ●" tabindex="-1"><a class="header-anchor" href="#计算机上删除数据的方式-删除数据-视频-音乐-文件等-计算机并不会把存储数据的硬盘区域-或者是内存-的内容擦除消去-而是将内容标记为可覆盖-这时候我们就不能再访问到数据-而这些可覆盖据数据会留在原来的硬盘区域直到被新的数据逐渐覆盖。-所以-删除了数据之后-只要没有对硬盘进行过多的操作-还是有可能复原数据的-所以-当我删除不可告人的东西时就要反复下载东西填充硬盘吗-●ˇ∀ˇ●" aria-hidden="true">#</a> 计算机上删除数据的方式：删除数据（视频，音乐，文件等），计算机并不会把存储数据的硬盘区域(或者是内存)的内容擦除消去，而是将内容标记为可覆盖，这时候我们就不能再访问到数据，而这些可覆盖据数据会留在原来的硬盘区域直到被新的数据逐渐覆盖。（所以，删除了数据之后，只要没有对硬盘进行过多的操作，还是有可能复原数据的（所以，当我删除不可告人的东西时就要反复下载东西填充硬盘吗？(●ˇ∀ˇ●)）</h5><h5 id="正题来了-delete-p-的含义不是删除消灭p。而是让p所指向的地址的内容标记为可覆盖。而p-null-则是将指针指向空。" tabindex="-1"><a class="header-anchor" href="#正题来了-delete-p-的含义不是删除消灭p。而是让p所指向的地址的内容标记为可覆盖。而p-null-则是将指针指向空。" aria-hidden="true">#</a> 正题来了，delete p 的含义不是删除消灭p。而是让p所指向的地址的内容标记为可覆盖。而p=null 则是将指针指向空。</h5><h5 id="delete-p-之后-p指向地址可覆盖-但是p仍然指向原来的地址-随着程序的运行-原本内存可能被使用-p指向可能内容改变。所以为了安全起见-将p指向null。避免p不小心再次被使用。" tabindex="-1"><a class="header-anchor" href="#delete-p-之后-p指向地址可覆盖-但是p仍然指向原来的地址-随着程序的运行-原本内存可能被使用-p指向可能内容改变。所以为了安全起见-将p指向null。避免p不小心再次被使用。" aria-hidden="true">#</a> delete p 之后，p指向地址可覆盖，但是p仍然指向原来的地址，随着程序的运行，原本内存可能被使用，p指向可能内容改变。所以为了安全起见，将p指向null。避免p不小心再次被使用。</h5><h5 id="如果直接p-null-而不先-delete-p。那么p的地址不可被覆盖-造成内存泄漏-内存不可以再使用-。-1" tabindex="-1"><a class="header-anchor" href="#如果直接p-null-而不先-delete-p。那么p的地址不可被覆盖-造成内存泄漏-内存不可以再使用-。-1" aria-hidden="true">#</a> 如果直接p=null,而不先 delete p。那么p的地址不可被覆盖，造成内存泄漏(内存不可以再使用)。</h5><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>#include &lt;iostream&gt;
using namespace std;
int main() 
{
    for(int i=0;i&lt;5;i++)
    {
    int *p=new int; 
    *p=i;
    cout&lt;&lt;&quot;p的地址： &quot;&lt;&lt;p&lt;&lt;endl;
    cout&lt;&lt;&quot;p的值： &quot;&lt;&lt;*p&lt;&lt;endl;
    delete p;
    *p=10;
     cout&lt;&lt;&quot;删除后p的地址： &quot;&lt;&lt;p&lt;&lt;endl;
    cout&lt;&lt;&quot;删除后p的值： &quot;&lt;&lt;*p&lt;&lt;endl;
    p=nullptr;
    }
    return 0;
}
//结果
p的地址： 0x1bd1e70
p的值： 0
删除后p的地址： 0x1bd1e70
删除后p的值： 10
p的地址： 0x1bd1e70
p的值： 1
删除后p的地址： 0x1bd1e70
删除后p的值： 10
p的地址： 0x1bd1e70
p的值： 2
删除后p的地址： 0x1bd1e70
删除后p的值： 10
p的地址： 0x1bd1e70
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),s=[t];function u(p,v){return n(),e("div",null,s)}const r=l(d,[["render",u],["__file","C++指针delete.html.vue"]]);export{r as default};
