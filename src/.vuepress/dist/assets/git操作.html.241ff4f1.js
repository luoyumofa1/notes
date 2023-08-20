import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as e,b as t,d as o,e as l,r as n}from"./app.bf1fe36d.js";const c={},d=e("h1",{id:"git基本操作-上传文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git基本操作-上传文件","aria-hidden":"true"},"#"),t(" git基本操作 (上传文件)")],-1),p={id:"由于本地git仓库和github仓库之间的传输是通过ssh加密的-所以需要先设置ssh",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#由于本地git仓库和github仓库之间的传输是通过ssh加密的-所以需要先设置ssh","aria-hidden":"true"},"#",-1),h={href:"https://so.csdn.net/so/search?q=GitHub&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},u=l("<li><p>输入<code>git init</code>初始化文件夹(文件夹下出现.git的隐藏文件夹)</p></li><li><p>输入<code>git add .</code>，添加该文件夹下的所有文件到本地仓库，注意add和. 之间有空格。&quot;.“表示添加所有文件，如果想要添加个别文件可以把”.&quot;替换为相应文件名（操作后无明显现象）</p></li><li><p>输入<code>git commit -m &quot;注释&quot;</code>，git commit -m作用为提交暂存区的文件（也就是上一步添加的文件），后面双引号内可以填写关于提交的注释信息（操作后有明显现象）</p></li><li><p>输入<code>git status</code>,即可查看当前状态</p></li><li><p>输入<code>git remote add origin https://gitee.com/ai-case-study-group/lesson-plan</code>命令，建立本地仓库与远程仓库的关联，指令后面的地址为仓库的地址（操作后无明显现象）</p><p>​ 1 如果上一步出现remote origin already exists 先输入git remote rm origin 删除关联的origin的远程库</p></li><li><p>输入<code>git pull --rebase origin master</code>命令，将远程仓库的内容合并到本地仓库。如果远程仓库为空可以跳过这一步，如果远程仓库不为空，则必须进行这一步，否则会报错</p></li><li><p>输入<code>git push -u origin master</code>命令，将本地仓库的文件推送到已经建立关联的远程仓库master分支中。<strong>带上-u 参数其实就相当于记录了push到远端分支的默认值，这样当下次我们还想要继续push的这个远端分支的时候推送命令就可以简写成git push即可</strong></p></li><li><p>如果在文件改动之后，想重新提交，只需进行2，3，6步就行</p></li>",8),m=e("p",null,"设置个人基本信息",-1),_=e("a",{href:"mailto:you@example.com"},"you@example.com",-1),b={href:"http://user.name",target:"_blank",rel:"noopener noreferrer"},f=e("a",{href:"mailto:blkj@boranet.com.cn"},"blkj@boranet.com.cn",-1),k=e("li",null,[e("p",null,"对于上传文件，必须保证远程仓库端有的本地仓库必须有，本地仓库有的远程仓库不必须有")],-1),x=l(`<p>10 . 如果在创建远程仓库时勾选创建了README文件，在使用pull命令时会报错.出现这个问题的最主要原因还是在于本地仓库和远程仓库实际上是独立的两个仓库。可以使用git pull origin master --allow-unrelated-histories或者使用git clone ***</p><ol start="11"><li><p><code>git branch &lt;branch&gt;</code> : 创建分支</p><pre><code>主分支一般是master，可以创建一个新的分支如git branch f1
</code></pre></li><li><p><code>git checkout &lt;branch&gt;</code> : 切换分支</p></li><li><p>创建并切换到two分支：git checkout -b two</p></li><li><h6 id="将master分支内容合并到dev分支" tabindex="-1"><a class="header-anchor" href="#将master分支内容合并到dev分支" aria-hidden="true">#</a> 将master分支内容合并到dev分支</h6></li><li><p>1、切换到你所在分支dev：git checkout dev</p><p>2.git pull origin dev //如果是自己一个开发就没有必要了，为了保险期间还是pull</p><p>3、git merge master</p><p>4、将本地内容push到dev分支：git push origin **</p></li><li><p>在git中需要使用命令来创建密钥，其中会生成私有密钥与公有密钥，将公有密钥放在github或者gitee上即可完成本地太远github火gitee的连接</p></li><li><p>git ls-files 查看暂存区文件，也就是git add之后的文件，如果想删除某文件在远程仓库的记录，先使用git rm file1 然后git status查看状态 ，然后可以git commit -m &quot;deleted file&quot;与 git push origin main，其中git rm --cached file2是仅仅删除远程仓库文件并不删除本地文件。</p></li><li><p>若是同一个项目文件，可直接在该其中进行文件修改，不需要重新建。</p></li></ol>`,2);function v(q,y){const i=n("ExternalLinkIcon");return s(),a("div",null,[d,e("h4",p,[g,t(" 由于本地Git仓库和"),e("a",h,[t("GitHub"),o(i)]),t("仓库之间的传输是通过SSH加密的，所以需要先设置SSH")]),e("ol",null,[u,e("li",null,[m,e("p",null,[t('1、 git config --global user.email "'),_,t('"(带冒号) 2、 git config --global '),e("a",b,[t("user.name"),o(i)]),t(' "Your Name" 3、 ssh-keygen -t rsa -C "'),f,t('"**会创建一个密钥（.pub公钥，不带是私钥)')])]),k]),x])}const S=r(c,[["render",v],["__file","git操作.html.vue"]]);export{S as default};
