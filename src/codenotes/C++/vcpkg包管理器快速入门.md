Windows 下开发 C/C++ 程序，少不了编译或配置第三方库，如GDAL、CGAL、PCL库等。但这些库编译或配置起来极为复杂，动辄需要花费半天甚至更久的时间。并且 C# 有 Nuget 包管理器、Python 有 PIP 包管理器，而 C/C++ 却没有统一的包管理器。为了解决这个问题，微软在几年前推出 vcpkg 包管理器，本文将介绍此包管理器的使用。

# 快速上手

前置条件:

- Windows 7 或更新的版本
- [Git][getting-started:git]
- [Visual Studio][getting-started:visual-studio] 2015 Update 3 或更新的版本（**包含英文语言包**）

1. 从 GitHub 上创建项目的副本

   ```shell
   git clone https://github.com/microsoft/vcpkg
   ```

2. 推荐使用 Powershell 运行 bootstrap.bat 脚本

   ```powershell
   .\vcpkg\bootstrap-vcpkg.bat
   ```

3. 安装需要的库，如：PCL

   ```powershell
   .\vcpkg\vcpkg install pcl:x64-windows
   ```

4. 卸载不需要的库，如：PCL

   ```powershell
   .\vcpkg\vcpkg remove pcl:x64-windows
   ```

5. 列出已经安装的库

   ```powershell
   .\vcpkg\vcpkg list
   ```

6. 集成到  Visual Studio 中，(可能需要管理员权限)

   ```powershell
   .\vcpkg\vcpkg integrate install
   ```
   

所有已安装的库均可使用 `#include` 包含您需使用的库的头文件且无需额外配置。如：

```c++
#include <pcl/io/pcd_io.h>
```

# 参考文档

- vcpkg：https://vcpkg.io/en/getting-started.html
- Microsoft：https://github.com/microsoft/vcpkg/blob/master/README_zh_CN.md