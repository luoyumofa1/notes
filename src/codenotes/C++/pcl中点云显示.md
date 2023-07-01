> ### 								pcl中点云显示

```C++
	//CloudViewer方法，简单点云的显示
    #include <pcl/visualization/cloud_viewer.h>
	pcl::visualization::CloudViewer viewer("test");
	viewer.showCloud(cloud);
	while (!viewer.wasStopped()) {};

	//PCLVisualizer方法，复杂点云显示
     #include <pcl/visualization/pcl_visualizer.h>
	boost::shared_ptr<pcl::visualization::PCLVisualizer> viewer(new pcl::visualization::PCLVisualizer("3D Viewer"));
	pcl::visualization::PointCloudColorHandlerGenericField<pcl::PointXYZ> fildColor(cloud, "z"); // 按照z字段进行渲染
	pcl::visualization::PointCloudColorHandlerCustom<pcl::PointXYZ> single_color(cloud, 0, 255, 0); // green
	//viewer->addPointCloud<pcl::PointXYZ>(cloud, single_color, "sample cloud");
	viewer->addPointCloud<pcl::PointXYZ>(cloud, fildColor, "sample cloud");//第二个可加可不加
	viewer->addPointCloud<pcl::PointXYZ>(sourceCloud, single_color, "second");
	viewer->setPointCloudRenderingProperties(pcl::visualization::PCL_VISUALIZER_POINT_SIZE, 3, "sample cloud"); // 设置点云大小
	while (!viewer->wasStopped())
	{
		viewer->spinOnce(100);
		//boost::this_thread::sleep(boost::posix_time::microseconds(100000));
	}

```

```C++
    pcl::PointCloud<pcl::PointXYZ>::Ptr pointCloudPtr(new pcl::PointCloud<pcl::PointXYZ>);
    pcl::PointCloud<pcl::PointXYZ>& pointCloud = *pointCloudPtr;
//其中对pointCloud的赋值可以直接传递给指针pointCloudPtr,不需要额外操作

```

