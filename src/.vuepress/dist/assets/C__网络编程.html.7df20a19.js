import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as e,e as s}from"./app.bf1fe36d.js";const d={},t=s(`<h2 id="c-网络编程" tabindex="-1"><a class="header-anchor" href="#c-网络编程" aria-hidden="true">#</a> C++网络编程</h2><h4 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>
#include &lt;iostream&gt;
#include &lt;winsock2.h&gt;  
#include &lt;WS2tcpip.h&gt;
#pragma comment(lib,&quot;ws2_32.lib&quot;)  

int main(int argc, char* argv[])
{
	//初始化WSA  
	WORD sockVersion = MAKEWORD(2, 2);
	WSADATA wsaData;
	if (WSAStartup(sockVersion, &amp;wsaData) != 0)
	{
		return 0;
	}

	//创建套接字  
	SOCKET slisten = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
	if (slisten == INVALID_SOCKET)
	{
		printf(&quot;socket error !&quot;);
		return 0;
	}

	//绑定IP和端口  
	sockaddr_in sin;
	sin.sin_family = AF_INET;
	sin.sin_port = htons(8888);
	sin.sin_addr.S_un.S_addr = INADDR_ANY;
	if (bind(slisten, (LPSOCKADDR)&amp;sin, sizeof(sin)) == SOCKET_ERROR)
	{
		printf(&quot;bind error !&quot;);
	}

	//开始监听  
	if (listen(slisten, 5) == SOCKET_ERROR)
	{
		printf(&quot;listen error !&quot;);
		return 0;
	}

	//循环接收数据  
	SOCKET sClient;
	sockaddr_in remoteAddr;
	int nAddrlen = sizeof(remoteAddr);
	char revData[255];
	while (true)
	{
		printf(&quot;等待连接...\\n&quot;);
		sClient = accept(slisten, (SOCKADDR *)&amp;remoteAddr, &amp;nAddrlen);
		if (sClient == INVALID_SOCKET)
		{
			printf(&quot;accept error !&quot;);
			continue;
		}
		printf(&quot;接受到一个连接：%s \\r\\n&quot;, inet_ntop(AF_INET, (void*)&amp;remoteAddr.sin_addr, revData, 16));
		// printf(&quot;接受到一个连接：%s \\r\\n&quot;, inet_ntoa(remoteAddr.sin_addr));  //inet_ntoa老函数在新版本VS+64位计算机上使用会报错

		//接收数据  
		int ret = recv(sClient, revData, 255, 0);
		if (ret &gt; 0)
		{
			revData[ret] = 0x00;
			printf(revData);
			printf(&quot;\\n&quot;);
		}

		//发送数据  
		const char * sendData = &quot;你好，TCP客户端！\\n&quot;;
		send(sClient, sendData, strlen(sendData), 0);
		closesocket(sClient);
	}

	closesocket(slisten);
	WSACleanup();
	return 0;
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端" aria-hidden="true">#</a> 客户端</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>
#include&lt;winsock2.h&gt;

#include&lt;iostream&gt;
#include&lt;string&gt;
#include &lt;WS2tcpip.h&gt;
using namespace std;
#pragma comment(lib, &quot;ws2_32.lib&quot;)
#pragma warning(disable:4996) //如果你有inet_addr函数的报错，加上这个就解决了
int main()
{
	WORD sockVersion = MAKEWORD(2, 2);
	WSADATA data;
	if (WSAStartup(sockVersion, &amp;data) != 0)
	{
		return 0;
	}
	while (true) 
	{
		SOCKET sclient = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
		if (sclient == INVALID_SOCKET)
		{
			printf(&quot;invalid socket!&quot;);
			return 0;
		}

		sockaddr_in serAddr;
		serAddr.sin_family = AF_INET;
		serAddr.sin_port = htons(8888);
		//serAddr.sin_addr.S_un.S_addr = inet_pton(AF_INET, &quot;127.0.0.1&quot;, &amp;serAddr);
		serAddr.sin_addr.S_un.S_addr = inet_addr(&quot;127.0.0.1&quot;);//如果你有inet_addr函数的报错，看上文
		if (connect(sclient, (sockaddr *)&amp;serAddr, sizeof(serAddr)) == SOCKET_ERROR)
		{  //连接失败 
			printf(&quot;connect error !&quot;);
			closesocket(sclient);
			return 0;
		}

		string data;
		cin &gt;&gt; data;
		const char * sendData;
		sendData = data.c_str();   //string转const char* 
								   //char * sendData = &quot;你好，TCP服务端，我是客户端\\n&quot;;
		send(sclient, sendData, strlen(sendData), 0);
		//send()用来将数据由指定的socket传给对方主机
		//int send(int s, const void * msg, int len, unsigned int flags)
		//s为已建立好连接的socket，msg指向数据内容，len则为数据长度，参数flags一般设0
		//成功则返回实际传送出去的字符数，失败返回-1，错误原因存于error 

		char recData[255];
		int ret = recv(sclient, recData, 255, 0);
		if (ret&gt;0) {
			recData[ret] = 0x00;
			printf(recData);
		}
		closesocket(sclient);
	}


	WSACleanup();
	return 0;

}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[t];function r(a,v){return i(),e("div",null,l)}const m=n(d,[["render",r],["__file","C++网络编程.html.vue"]]);export{m as default};
