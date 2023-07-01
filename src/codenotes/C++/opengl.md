### opengl

另外在这里科普一下glad、glew、glfw、Freeglut的区别：

glew（The OpenGL Extension Wrangler Library）是对底层OpenGL接口的封装，可以让你的代码跨平台。

glad与glew作用相同，可以看作它的升级版。

Freeglut（OpenGL Utility Toolkit）主要用于创建OpenGL上下文、接收一些鼠标键盘事件等等。

glfw（Graphics Library Framework）是Freeglut升级版，作用基本一样。

通常来说glad和glfw配合使用，比如我上面发的那个网站就是。

glew和Freeglut配合使用，比如OpenGL红宝书上面的例子。





*GLFW是一个专门针对OpenGL的C语言库,它提供了一些渲染物体所需的最低限度的**接口**。它允许用户 创建OpenGL上下文，定义窗口参数以及处理用户输入。

\* GLAD：由于OpenGL驱动版本众多，它大多数函数的位置都无法在编译时确定下来，需要在运行时查询。所以任务就落在了开发者身上，开发者需要在运行时获取函数地址并将其保存在一个函数指针中供以后使用。取得地址的方法因平台而异,代码非常复杂，而且很繁琐，我们需要对每个可能使用的函数都要重复这个过程。幸运的是，有些库能简化此过程，其中GLAD是目前最新，也是最流行的库。GLAD是用来管理OpenGL的函数指针的，所以在调用任何OpenGL的函数之前我们需要初始化GLAD。GLAD也可以使OpenGL基础渲染变得简单。



GLFW 提供 OpenGL, OpenGL ES 和 Vulkan 的桌面开发环境，是一个跨平台的开源库。利用它可以创建窗口、处理键盘鼠标等事件。windows下它使用win32 api创建窗口，WGL关联OPENGL上下文。Linux 下使用 X11创建窗口，GLX关联OPENGL上下文。MAC下使用cocoa创建窗口，AGL关联OPENGL上下文。

GLAD 的功能比较专一，专门加载OpenGL的函数指针。查看源码有大量看起来重复的代码，但是是很必要的，因为每一个函数都要重复相同的搜寻过程。都是些dirty work,dity code。





早期的OpenGL使用立即渲染模式（Immediate mode，也就是固定渲染管线），这个模式下绘制图形很方便。OpenGL的大多数功能都被库隐藏起来，开发者很少有控制OpenGL如何进行计算的自由。而开发者迫切希望能有更多的灵活性。随着时间推移，规范越来越灵活，开发者对绘图细节有了更多的掌控。立即渲染模式确实容易使用和理解，但是效率太低。因此从OpenGL3.2开始，规范文档开始废弃立即渲染模式，并鼓励开发者在OpenGL的核心模式(Core-profile)下进行开发，这个分支的规范完全移除了旧的特性。

立即模式"的一个示例是使用`glBegin`和`glEnd`以及它们之间的`glVertex`. 立即模式"的另一个示例是将`glDrawArrays`与客户端顶点数组(即**不是**顶点缓冲区对象)一起使用.

一般使用核心模式时需要引入glew或者glad，不然只使用glut也可以完成立即模式的。



glut，freeglut，glfw是一类的作用，功能相似

glew，glad是一类的作用，功能相似