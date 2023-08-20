import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as l,e as n}from"./app.bf1fe36d.js";const t={},o=n(`<blockquote><h3 id="pcl中点云显示" tabindex="-1"><a class="header-anchor" href="#pcl中点云显示" aria-hidden="true">#</a> pcl中点云显示</h3></blockquote><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>	//CloudViewer方法，简单点云的显示
    #include &lt;pcl/visualization/cloud_viewer.h&gt;
	pcl::visualization::CloudViewer viewer(&quot;test&quot;);
	viewer.showCloud(cloud);
	while (!viewer.wasStopped()) {};

	//PCLVisualizer方法，复杂点云显示
     #include &lt;pcl/visualization/pcl_visualizer.h&gt;
	boost::shared_ptr&lt;pcl::visualization::PCLVisualizer&gt; viewer(new pcl::visualization::PCLVisualizer(&quot;3D Viewer&quot;));
	pcl::visualization::PointCloudColorHandlerGenericField&lt;pcl::PointXYZ&gt; fildColor(cloud, &quot;z&quot;); // 按照z字段进行渲染
	pcl::visualization::PointCloudColorHandlerCustom&lt;pcl::PointXYZ&gt; single_color(cloud, 0, 255, 0); // green
	//viewer-&gt;addPointCloud&lt;pcl::PointXYZ&gt;(cloud, single_color, &quot;sample cloud&quot;);
	viewer-&gt;addPointCloud&lt;pcl::PointXYZ&gt;(cloud, fildColor, &quot;sample cloud&quot;);//第二个可加可不加
	viewer-&gt;addPointCloud&lt;pcl::PointXYZ&gt;(sourceCloud, single_color, &quot;second&quot;);
	viewer-&gt;setPointCloudRenderingProperties(pcl::visualization::PCL_VISUALIZER_POINT_SIZE, 3, &quot;sample cloud&quot;); // 设置点云大小
	while (!viewer-&gt;wasStopped())
	{
		viewer-&gt;spinOnce(100);
		//boost::this_thread::sleep(boost::posix_time::microseconds(100000));
	}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>    pcl::PointCloud&lt;pcl::PointXYZ&gt;::Ptr pointCloudPtr(new pcl::PointCloud&lt;pcl::PointXYZ&gt;);
    pcl::PointCloud&lt;pcl::PointXYZ&gt;&amp; pointCloud = *pointCloudPtr;
//其中对pointCloud的赋值可以直接传递给指针pointCloudPtr,不需要额外操作

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[o];function s(c,u){return e(),l("div",null,d)}const v=i(t,[["render",s],["__file","pcl中点云显示.html.vue"]]);export{v as default};
