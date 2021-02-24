-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2021 at 06:50 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.3.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbfirst`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(765) DEFAULT NULL,
  `email` varchar(765) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `password` varchar(765) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Superadmin', 'admin@admin.com', '0175555555', 'e10adc3949ba59abbe56e057f20f883e', '2020-12-09 06:17:37', NULL),
(2, 'Musabbir', 'musabbir.mamun@apsissolutions.com', '01726315133', '$2y$10$o/Ou9gTud5F7oujt4Qk3oeBEatsH8OcCw0MoDyfYToZQIZx6/1e1q', '2020-12-09 06:17:37', NULL),
(3, 'Foysal Ahmed', 'foysal.ahmed@apsissolutions.com', '01758382828', '$2y$10$o/Ou9gTud5F7oujt4Qk3oeBEatsH8OcCw0MoDyfYToZQIZx6/1e1q', '2020-12-09 06:17:37', NULL),
(82, 'admin', 'aa@bb.com', '01862482532', '$2a$04$rvKiBzKBSyy1VbShLpESJ.S1lyTYjzbelZzemFS.e7Kq4z7z4aRmi', '2021-01-01 13:42:54', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
