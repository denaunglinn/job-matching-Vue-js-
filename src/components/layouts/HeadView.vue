<template>
 <div>
     <header>
        <!-- Header Start -->
        <div class="header-area">
            <div class="main-header">
                <div class="header-top d-none d-md-block" style="background-color: #5271ff;">
                    <div class="container">
                        <div class="col-xl-12">
                            <div class="row d-flex justify-content-between align-items-center">
                                <div class="header-info-left">
                                    <ul class="float-left">
                                        <li>
                                            <a href="/"><img src="assets/img/logo/header_logo.png" width="10%" alt="" /></a>
                                        </li>
                                        <li>
                                            <img src="assets/img/icon/header_icon1.png" alt="" />34ºc, Sunny
                                        </li>
                                        <li>
                                            <img src="assets/img/icon/header_icon1.png" alt="" />Tuesday, 18th June, 2019
                                        </li>
                                    </ul>
                                </div>
                                <div class="header-info-right">
                                    <ul class="header-social">
                                        <li>
                                            <a href="details.html"><i class="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="details.html"><i class="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="details.html"><i class="fab fa-pinterest-p"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-mid d-none d-md-block">
                    <div class="container">
                        <div class="row d-flex align-items-center">
                            <!-- Logo -->
                            <div class="col-xl-3 col-lg-3 col-md-3">
                                <div class="logo">
                                    <a href="/"><img src="assets/img/logo/job_match_logo1.png" height="150px" alt="" /></a>
                                </div>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9">
                                <div class="header-banner f-right">
                                    <img src="assets/img/banner/banner2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-bottom header-sticky">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xl-10 col-lg-10 col-md-12 header-flex">
                                <!-- sticky -->
                                <div class="sticky-logo">
                                    <a href="/"><img src="assets/img/logo/job_match_logo1.png" height="80px" alt="" /></a>
                                </div>
                                <!-- Main-menu -->
                                <div class="main-menu d-none d-md-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a href="/home">Home</a></li>
                                            <li><a href="categori.html">Category</a></li>
                                            <li><a href="/about">About</a></li>
                                            <li><a href="latest_news.html">Latest News</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li>
                                                <a href="details.html">Pages</a>
                                                <ul class="submenu">
                                                    <li><a href="elements.html">Element</a></li>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="single-blog.html">Blog Details</a></li>
                                                    <li><a href="details.html">Categori Details</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-4">
                                <div class="header-right-btn f-right d-none d-lg-block">
                                    <i class="fas fa-search special-tag"></i>
                                    <div class="search-box">
                                        <form action="details.html">
                                            <input type="text" placeholder="Search" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- Mobile Menu -->
                            <div class="col-12">
                                <div class="mobile_menu d-block d-md-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->
    </header>
 </div>
 
</template>
<script>
export default {
    name : "HeadView",
    data () {
        return {
            date : new Date().toLocaleDateString(),
        }
    },
}

</script>
