<?php

if (isset($_POST['sendFeedbackBtn'])) {
    include "../db_conn.php";
    function validate($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $feedbackEmoji = validate($_POST['feedbackEmoji']);
    $feedbackRating = validate($_POST['feedbackRating']);
    $feedbackText = validate($_POST['feedbackText']);

    $feedbackData = '&feedbackEmoji=' . $feedbackEmoji . '&feedbackRating=' . $feedbackRating . '&feedbackText=' . $feedbackText;

    if (empty($feedbackEmoji)) {
        header("Location: ../index.php?error=feedbackEmoji is required&$feedbackData");
    } else if (empty($feedbackRating)) {
        header("Location: ../index.php?error=feedbackRating is required&$feedbackData");
    } else if (empty($feedbackText)) {
        header("Location: ../index.php?error=feedbackText is required&$feedbackData");
    } else {

        $sql = "INSERT INTO tbl_feedbacks(feedbackDate, feedbackTime, feedbackEmoji, feedbackRating, feedbackText) 
               VALUES(NOW(), NOW(), '$feedbackEmoji', '$feedbackRating', '$feedbackText')";
        $result = mysqli_query($conn, $sql);
        if ($result) {
            header("Location: ../index.php?success=Thank you for your feedback!");
        } else {
            header("Location: ../index.php?error=unknown error occurred&$feedbackData");
        }
    }
}

if (isset($_POST['sendReportBtn'])) {
    include "../db_conn.php";
    function validate($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $problemTitle = validate($_POST['problemTitle']);
    $problemType = validate($_POST['problemType']);
    $problemDesc = validate($_POST['problemDesc']);
    $problemStatus = 'Pending';

    $problemData = '&problemTitle=' . $problemTitle . '&problemType=' . $problemType . '&problemDesc=' . $problemDesc;

    if (empty($problemTitle)) {
        header("Location: ../index.php?error=problemTitle is required&$problemData");
    } else if (empty($problemType)) {
        header("Location: ../index.php?error=problemType is required&$problemData");
    } else if (empty($problemDesc)) {
        header("Location: ../index.php?error=problemDesc is required&$problemData");
    } else {

        $sql = "INSERT INTO tbl_problems(problemTitle, problemDate, problemTime, problemType, problemDesc, problemStatus) 
               VALUES('$problemTitle', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), '$problemType', '$problemDesc', '$problemStatus')";
        $result = mysqli_query($conn, $sql);
        if ($result) {
            header("Location: ../index.php?success=Successfully send report!");
        } else {
            header("Location: ../index.php?error=unknown error occurred&$problemData");
        }
    }
}