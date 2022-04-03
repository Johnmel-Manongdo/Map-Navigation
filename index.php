<?php include "php/read.php"; ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>PHINMA UPang</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
    <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css" />
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css" rel="stylesheet">
    <link rel="stylesheet"
        href="https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.css" />
    <link rel="stylesheet"
        href="https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.Default.css" />
    <link rel="stylesheet"
        href="https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-locatecontrol/v0.43.0/L.Control.Locate.css" />
    <link rel="stylesheet" href="assets/leaflet-groupedlayercontrol/leaflet.groupedlayercontrol.css" />
    <link rel="stylesheet" href="assets/css/app.css" />
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <link rel="apple-touch-icon" sizes="76x76" href="assets/img/favicon-76.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="assets/img/favicon-120.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="assets/img/favicon-152.png" />
    <link rel="icon" sizes="196x196" href="assets/img/favicon-196.png" />
    <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
</head>

<body>
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <div class="navbar-icon-container">
                    <a href="#" class="navbar-icon pull-right visible-xs" id="nav-btn"><i
                            class="fa fa-bars fa-lg white"></i></a>
                    <a href="#" class="navbar-icon pull-left visible-xs" id="sidebar-toggle-btn"><i
                            class="fa fa-chevron-right fa-lg white"></i></a>
                </div>
                <a class="navbar-brand" href="#">PHINMA UPang</a>
            </div>
            <div class="navbar-collapse collapse">
                <form class="navbar-form navbar-right" role="search">
                    <div class="form-group has-feedback">
                        <input id="searchbox" type="text" placeholder="Search" class="form-control" />
                        <span id="searchicon" class="fa fa-search form-control-feedback"></span>
                    </div>
                </form>
                <ul class="nav navbar-nav">
                    <li class="hidden-xs">
                        <a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="list-btn"><i
                                class="fa fa-bars"></i>&nbsp;&nbsp;POI</a>
                    </li>
                    <li>
                        <a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="navigate-btn"><i
                                class="fa fa-map-signs"></i>&nbsp;&nbsp;Navigate</a>
                    </li>
                    <li>
                        <a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="about-btn"><i
                                class="fa fa-question"></i>&nbsp;&nbsp;About</a>
                    </li>
                    <li class="dropdown">
                        <a id="toolsDrop" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"><i
                                class="fa fa-wrench"></i>&nbsp;&nbsp;Tools
                            <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <!-- <li>
                <a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="legend-btn"><i class="fa fa-picture-o"></i>&nbsp;&nbsp;Show Legend</a>
              </li> -->
                            <li>
                                <a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="events-btn"><i
                                        class="fa fa-calendar"></i>&nbsp;&nbsp;Show Events</a>
                            </li>
                            <li>
                                <a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="problem-btn"><i
                                        class="fa fa-bug"></i>&nbsp;&nbsp;Report a Problem</a>
                            </li>
                            <li>
                                <a href="#" data-toggle="collapse" data-target=".navbar-collapse.in"
                                    id="feedback-btn"><i class="fa fa-commenting-o"></i>&nbsp;&nbsp;Send
                                    Feedback</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!--/.navbar-collapse -->
        </div>
    </div>

    <div id="container">
        <div id="sidebar">
            <div class="sidebar-wrapper">
                <div class="panel panel-default" id="features">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Points of Interest
                            <button type="button" class="btn btn-xs btn-default pull-right" id="sidebar-hide-btn">
                                <i class="fa fa-chevron-left"></i>
                            </button>
                        </h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <input type="text" class="form-control search" placeholder="Filter" />
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-table">
                        <table class="table table-hover" id="feature-list">
                            <thead class="hidden">
                                <tr>
                                    <th>Icon</th>
                                </tr>

                                <tr></tr>
                                <tr>
                                    <th>Name</th>
                                </tr>

                                <tr></tr>
                                <tr>
                                    <th>Chevron</th>
                                </tr>

                                <tr></tr>
                            </thead>

                            <tbody class="list"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div id="map"></div>
    </div>

    <div id="loading">
        <div class="loading-indicator">
            <div class="progress progress-striped active">
                <div class="progress-bar progress-bar-info progress-bar-full"></div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="navigateModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h4 class="modal-title">Navigate</h4>
                </div>
                <div class="modal-body">
                    <form id="contact-form">

                        <label for="startingArea">Starting Area</label>

                        <div class="form-group">
                            <select class="form-control" id="startingArea" required>
                                <option selected hidden value="">Select Starting Area</option>
                                <option value="Administration Building">Administration Building</option>
                                <option value="Automotive Building">Automotive Building</option>
                                <option value="BE Building">BE Building</option>
                                <option value="CHS Building">CHS Building</option>
                                <option value="CMA Building">CMA Building</option>
                                <option value="Engineering Building">Engineering Building</option>
                                <option value="Faculty Center">Faculty Center</option>
                                <option value="Forest Area">Forest Area</option>
                                <option value="ITS Building">ITS Building</option>
                                <option value="MBA Building">MBA Building</option>
                                <option value="NH Building">NH Building</option>
                                <option value="PTC Building">PTC Building</option>
                                <option value="Store Area">Store Area</option>
                                <option value="Student Plaza">Student Plaza</option>
                                <option value="UPang Gymnasium">UPang Gymnasium</option>
                            </select>
                        </div>

                        <label for="destinationArea">Destination</label>

                        <div class="form-group">
                            <select class="form-control" id="destinationArea" required>
                                <option selected hidden value="">Select Destination</option>
                                <option value="Administration Building">Administration Building</option>
                                <option value="Automotive Building">Automotive Building</option>
                                <option value="BE Building">BE Building</option>
                                <option value="CHS Building">CHS Building</option>
                                <option value="CMA Building">CMA Building</option>
                                <option value="Engineering Building">Engineering Building</option>
                                <option value="Faculty Center">Faculty Center</option>
                                <option value="Forest Area">Forest Area</option>
                                <option value="ITS Building">ITS Building</option>
                                <option value="MBA Building">MBA Building</option>
                                <option value="NH Building">NH Building</option>
                                <option value="PTC Building">PTC Building</option>
                                <option value="Store Area">Store Area</option>
                                <option value="Student Plaza">Student Plaza</option>
                                <option value="UPang Gymnasium">UPang Gymnasium</option>
                            </select>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">
                                Cancel
                            </button>
                            <button id="start-btn" type="button" class="btn btn-success" data-dismiss="modal">
                                Start
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <div class="modal fade" id="aboutModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="close" type="button" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h4 class="modal-title">PHINMA UPang Campus Navigation Map</h4>
                </div>
                <div class="modal-body">
                    <ul class="nav nav-tabs nav-justified" id="aboutTabs">
                        <li class="active">
                            <a href="#about" data-toggle="tab"><i class="fa fa-question"></i>&nbsp;About the project</a>
                        </li>

                        <li>
                            <a href="#campus" data-toggle="tab"><i class="fa fa-university"></i>&nbsp;Campus</a>
                        </li>

                        <li>
                            <a href="#team" data-toggle="tab"><i class="fa fa-users"></i>&nbsp;Project Team</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="aboutTabsContent">
                        <div class="tab-pane fade active in" id="about">
                            <div class="color-left">
                                <p style="margin: 20px;">
                                    PHINMA UPang is a fairly large campus with an estimated 12,000 students. New
                                    buildings
                                    are built to
                                    accommodate all of its student. This will result to relocation of some buildings and
                                    facilities. Thus, this
                                    confuse the students especially new-comers and visitors. This project was develop to
                                    help students, staff and
                                    visitors in navigating inside the main campus.
                                </p>
                            </div>
                            <div class="panel panel-primary">
                                <div class="panel-heading">Features</div>
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        Location Finder
                                    </li>
                                    <li class="list-group-item">
                                        Map Navigation
                                    </li>
                                    <li class="list-group-item">
                                        Interactive Map
                                    </li>
                                    <li class="list-group-item">
                                        Search for Points of Interest
                                    </li>
                                    <li class="list-group-item">
                                        View Campus Events
                                    </li>
                                    <li class="list-group-item">
                                        Send Feedback and Report Problem
                                    </li>
                                    <li class="list-group-item">
                                        Admin Panel
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="tab-pane fade in" id="campus">
                            <div class="row">
                                <div class="col-md-12">
                                    <!-- <img src="assets/img/upang.png" alt="" style="float:left;width:300px;height:250px; margin:10px;"> -->
                                    <div class="color-left">
                                        <p style="margin: 10px;">
                                            The PHINMA – University of Pangasinan, also known as UPang, is a private and
                                            non-sectarian university located at Dagupan, Pangasinan, Philippines. It is
                                            a member
                                            of the PHINMA Education Network (PEN). It offers practically all
                                            undergraduate and
                                            graduate courses that Metro Manila universities offer. It has a staff of
                                            about 300
                                            faculty members and employees and 12, 000 students.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <h3>History</h3>

                            <div class="container py-5">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div id="content">
                                            <ul class="timeline-1 text-black">
                                                <li class="event" data-date="1925">
                                                    <h4 class="mb-3">Dagupan Institute</h4>
                                                    <p>The University of Pangasinan started operation in 1925 as the
                                                        Dagupan
                                                        Institute, which offered elementary, secondary and vocational
                                                        courses.
                                                        It was founded by Dean Francisco Benitez, Dr. Blas F. Rayos, Dr.
                                                        Apolinario
                                                        delos Santos, and Dr. Sylvestre Pascual. Rayos became the
                                                        president of the school and headed it for 45 years until 1975
                                                        when he died
                                                        and was succeeded by his son, George O. Rayos, who served as
                                                        president until
                                                        1987. In 1937, the College of Liberal Arts was established with
                                                        the president
                                                        Blas F. Rayos Sr. as its first dean.</p>
                                                </li>
                                                <li class="event" data-date="1941">
                                                    <h4 class="mb-3 pt-3">Dagupan Junior College</h4>
                                                    <p>In 1941, the school was renamed the Dagupan Junior College. Its
                                                        operation was
                                                        interrupted by the outbreak of World War II in December 1941. It
                                                        resumed
                                                        operation in 1945 immediately after the war. Four courses were
                                                        added to its
                                                        offering soon after. These were Civil Engineering, Architecture,
                                                        Graduate School,
                                                        and Secretarial Science. Shortly thereafter, additional courses
                                                        were offered such
                                                        as Secondary Education, Law, Home Economics, Nursing, and
                                                        Commerce, with major in
                                                        Accounting, Management, Banking and Finance, and Economics.</p>
                                                </li>
                                                <li class="event" data-date="1950">
                                                    <h4 class="mb-3 pt-3">Dagupan Colleges</h4>
                                                    <p>In 1950, the school assumed the name Dagupan Colleges, and the
                                                        Graduate School
                                                        added courses leading to the degrees of Master of Arts in
                                                        Philosophy and Master of
                                                        Science in Business Administration. The school started a review
                                                        class in Nursing
                                                        in 1954. Eventually, review classes in Accounting, Civil
                                                        Engineering and Law were
                                                        offered. The year 1959 saw further expansion of curricular
                                                        offerings with the
                                                        opening of courses leading to the degrees of Bachelor of Science
                                                        in Foods and
                                                        Nutrition, and Bachelor of Science in Journalism.
                                                        In the next decade following were added: the organization of
                                                        Naval Reserve
                                                        Officers' Training Corps (NROTC) and the Naval Women's Auxiliary
                                                        Corps in 1960,
                                                        and the offering of the Sanitary Engineering course in 1965.</p>
                                                </li>
                                                <li class="event" data-date="1968">
                                                    <h4 class="mb-3 pt-3">Status</h4>
                                                    <p class="mb-0">On July 3, 1968, the college was converted into a
                                                        university by
                                                        virtue of the University Charter granted by the Department of
                                                        Education.
                                                        Thereforth, the school operated as the University of Pangasinan.

                                                        In 2009, it became a member of the PHINMA Education Network.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="tab-pane fade in" id="team">

                            <div class="panel panel-primary">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        Johnmel Manongdo
                                    </li>
                                    <li class="list-group-item">
                                        James Stephen Biagtan
                                    </li>
                                    <li class="list-group-item">
                                        Joshua Arenas
                                    </li>
                                    <li class="list-group-item">
                                        Justin Laroza
                                    </li>
                                    <li class="list-group-item">
                                        Jerome Sison
                                    </li>
                                    <li class="list-group-item">
                                        Angelie Cuison
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <div class="modal fade" id="legendModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h4 class="modal-title">Map Legend</h4>
                </div>
                <div class="modal-body">
                    <p>Map Legend image here...</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <div class="modal fade" id="eventsModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h4 class="modal-title">Events</h4>
                </div>
                <div class="modal-body">
                    <div class="container-fluid p-3 my-3 border">
                        <div class="table-responsive">
                            <?php if (mysqli_num_rows($result)) { ?>
                            <table class="table table-sm table-striped table-bordered">
                                <thead class="thead-dark">
                                    <tr class="d-flex">
                                        <th></th>
                                        <th>Event Name</th>
                                        <th>Venue</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                    $i = 0;
                    while ($rows = mysqli_fetch_assoc($result)) {
                      $i++;
                    ?>
                                    <tr class="d-flex">
                                        <th scope="row"><?= $i ?></th>
                                        <td style="text-transform: capitalize"><?= $rows['eventName']; ?></td>
                                        <td><?= $rows['eventPlace']; ?></td>
                                        <td><?= date('M d, Y', strtotime($rows['eventStartDate'])); ?> -
                                            <?= date('M d, Y', strtotime($rows['eventEndDate'])); ?></td>
                                        <td><?= date('h:i A', strtotime($rows['eventStartTime'])); ?> -
                                            <?= date('h:i A', strtotime($rows['eventEndTime'])); ?></td>
                                        <td style="
                          word-wrap: break-word;
                          min-width: 100px;
                          max-width: 100px;
                        "><?= $rows['eventDesc']; ?></td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                            </table>
                            <?php } ?>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <div class="modal fade" id="problemModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-m">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h4 class="modal-title">Report Problem</h4>
                </div>
                <div class="modal-body">
                    <?php if (isset($_GET['success'])) { ?>
                    <script>
                    swal({
                        title: "<?php echo $_GET['success']; ?>",
                        icon: "success",
                        button: "Okay",
                    });
                    </script>
                    <?php } ?>
                    <form action="php/create.php" method="POST">

                        <div class="form-group">
                            <label for="problemTitle">Title</label>
                            <input class="form-control" value="<?php if (isset($_GET['problemTitle']))
                                                    echo ($_GET['problemTitle']); ?>" id="inputEventName" type="text"
                                name="problemTitle" placeholder="Title" required />
                        </div>
                        <div class="form-group">
                            <label for="problemType">Category</label>
                            <select class="form-control" value="<?php if (isset($_GET['problemType']))
                                                    echo ($_GET['problemType']); ?>" id="exampleSelect1"
                                name="problemType" required>
                                <option selected hidden value="">Select Category</option>
                                <option value="Bugs">Bugs</option>
                                <option value="Inaccuracy">Inaccuracy</option>
                                <option value="Design">Design</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="problemDesc">Description</label>
                            <textarea class="form-control" value="<?php if (isset($_GET['problemDesc']))
                                                      echo ($_GET['problemDesc']); ?>" name="problemDesc"
                                placeholder="Write a short description of your report..." rows="10" cols="100"
                                required></textarea>
                        </div>
                        <div class="form-group">
                            <input class="form-control" id="problemStatus" value="Pending" name="problemStatus"
                                type="hidden" placeholder="Status" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal"
                                onclick="clearReportTextArea();">
                                Cancel
                            </button>
                            <button onclick="checker()" type="submit" name="sendReportBtn" class="btn btn-success">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <div class="modal fade" id="feedbackModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h4 class="modal-title">Send Feedback</h4>
                </div>

                <div class="modal-body">
                    <form action="php/create.php" method="POST">
                        <?php if (isset($_GET['success'])) { ?>
                        <script>
                        swal({
                            title: "<?php echo $_GET['success']; ?>",
                            icon: "success",
                            button: "Okay",
                        });
                        </script>
                        <?php } ?>
                        <div class="form-group" style="text-align: center;">
                            <p><b>Tell us your experience after using the app</b></p>
                            <label class="feedbackRadio">
                                <input type="radio" name="feedbackEmoji" value="sad.png">
                                <img src="assets/img/sad.png" alt="sad icon" title="I don' t like it"
                                    style="height: 50px;width: 50px;padding: 10px;">
                            </label>
                            <label class="feedbackRadio">
                                <input type="radio" name="feedbackEmoji" value="thinking.png">
                                <img src="assets/img/thinking.png" alt="confused icon" title="I'm confused!"
                                    style="height: 50px;width: 50px;padding: 10px;">
                            </label>
                            <label class="feedbackRadio">
                                <input type="radio" name="feedbackEmoji" value="smile.png">
                                <img src="assets/img/smile.png" alt="smile icon" title="It's okay"
                                    style="height: 50px;width: 50px;padding: 10px;">
                            </label>
                            <label class="feedbackRadio">
                                <input type="radio" name="feedbackEmoji" value="wow.png">
                                <img src="assets/img/wow.png" alt="amaze icon" title="It's amazing!"
                                    style="height: 50px;width: 50px;padding: 10px;">
                            </label>
                            <label class="feedbackRadio">
                                <input type="radio" name="feedbackEmoji" value="emoji.png">
                                <img src="assets/img/emoji.png" alt="in-love icon" title="I love it!"
                                    style="height: 50px;width: 50px;padding: 10px;">
                            </label>
                        </div>

                        <div class="form-group" style="text-align: center;">
                            <p><b>Give us your rating</b></p>
                            <label class="feedbackRadio">
                                <input type="radio" name="feedbackRating" value="1">
                                <img src="assets/img/number-one.png" alt="1"
                                    style="height: 50px;width: 50px;padding: 10px;">
                            </label>
                            <label class="feedbackRadio">
                                <input type="radio" name="feedbackRating" value="2">
                                <img src="assets/img/number-2.png" alt="2"
                                    style="height: 50px;width: 50px;padding: 10px;">
                            </label>
                            <label class="feedbackRadio">
                                <input type="radio" name="feedbackRating" value="3">
                                <img src="assets/img/number-3.png" alt="3"
                                    style="height: 50px;width: 50px;padding: 10px;">
                            </label>
                            <label class="feedbackRadio">
                                <input type="radio" name="feedbackRating" value="4">
                                <img src="assets/img/number-four.png" alt="4"
                                    style="height: 50px;width: 50px;padding: 10px;">
                            </label>
                            <label class="feedbackRadio">
                                <input type="radio" name="feedbackRating" value="5">
                                <img src="assets/img/number-5.png" alt="5"
                                    style="height: 50px;width: 50px;padding: 10px;">
                            </label>
                        </div>

                        <div class="form-group">
                            <label for="feedbackText">Feedback</label>
                            <textarea class="form-control" value="<?php if (isset($_GET['feedbackText']))
                                                      echo ($_GET['feedbackText']); ?>" name="feedbackText"
                                placeholder="Write your feedback here..." rows="5" cols="10" style="resize: vertical;"
                                required></textarea>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal"
                                onclick="clearReportTextArea();">
                                Cancel
                            </button>
                            <button onclick="checker()" type="submit" name="sendFeedbackBtn" class="btn btn-success">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <div class="modal fade" id="descriptionModal" tabindex="-1" role="dialog" data-backdrop="static"
        data-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h3 class="modal-title" id="description-title"></h3>
                </div>
                <div class="modal-body">
                    <p id="description-text"></p>
                    <div id="description-pic"></div>
                    <hr />
                    <p><b>Points of Interest:</b></p>
                    <p id="description-poi-1"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>


    <script>
    function checker() {
        var result = confirm('Do you want to send it?');
        if (result == false) {
            event.preventDefault();
        }
    }
    </script>

    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="https://d3js.org/d3.v3.min.js" type="text/javascript"></script>

    <script src="https://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js"></script>

    <!-- <script src="https://cdn.osmbuildings.org/classic/0.2.2b/OSMBuildings-Leaflet.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.10.5/typeahead.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.3/handlebars.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/list.js/1.1.1/list.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.js"></script>

    <script src="https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster.js">
    </script>
    <script src="https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-locatecontrol/v0.43.0/L.Control.Locate.min.js">
    </script>

    <script src="assets/leaflet-groupedlayercontrol/leaflet.groupedlayercontrol.js"></script>
    <script src="assets/js/app.js"></script>

    <script src="assets/js/path.js"></script>

</body>

</html>

</html>