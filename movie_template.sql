-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2021 at 10:55 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vue-spa-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `movie` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `director` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `link` text COLLATE utf8_unicode_ci NOT NULL,
  `image` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `cast` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `releaseDate` date DEFAULT NULL,
  `rating` double(8,2) UNSIGNED NOT NULL DEFAULT 0.00,
  `summary` longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `duration` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `user_id`, `movie`, `director`, `link`, `image`, `cast`, `releaseDate`, `rating`, `summary`, `duration`, `created_at`, `updated_at`) VALUES
(1, 1, 'Jiang Ziya', 'Li Wei, Teng Cheng', '5EVNxNVj9go', 'posters/xFz4qhI1fUY2nAfmNxuTJ7ndiRYL2chFnyFMMoq7.jpeg', 'Ji Guanlin,Zheng Xi,Meme Yan,Jiang Guangtao,Ning Yang,Sheng Feng,Tutehameng', '2020-10-08', 6.40, 'Atop the ruins of war, top commander JIANG ZIYA is given the task to banish the Nine-tailed Fox Demon who threatens all mortals\' very existence. When he discovers the Nine-tailed Fox\'s life linked to the soul of an innocent girl, he is faced with a challenging decision, follow the will of heaven or find his own path to righteousness.', '1hr50min', '2021-01-16 05:39:16', '2021-01-16 05:39:16'),
(2, 1, 'The Mummy Returns', 'Stephen Sommers', 'RYHaarxQTFk', 'posters/N3LB3KO1TKby3zxbCutaDZrnvQCOBaokbrmLI0tP.jpeg', 'Brendan Fraser,Rachel Weisz,John Hannah,Arnold Vosloo,Patricia Velásquez,Dwayne Johnson', '2001-05-04', 6.40, 'When an archaeologist couple\'s son finds the Bracelet of Anubis, it locks onto his wrist. A cult resurrects Imhotep, an evil Egyptian high priest, who needs the bracelet to defeat the Scorpion King.', '2hr01min', '2021-01-16 05:42:52', '2021-01-16 05:42:52'),
(3, 1, 'The Mask', 'Chuck Russell', 'LZl69yk5lEY', 'posters/s7iH5HdqP4IqZUNBAEek6Cic3l0KFFvT9WVSmi9e.jpeg', 'Jim Carrey,Peter Riegert,Peter Greene,Amy Yasbeck,Richard Jeni,Cameron Diaz', '1994-07-28', 6.90, 'Stanley, a meek bank employee, turns into an eccentric and maniacal green-skinned superhero who can bend reality, after wearing a wooden mask that was created by Loki, the Norse god of mischief.', '1hr41min', '2021-01-16 05:45:06', '2021-01-16 05:45:06'),
(4, 1, 'A.I.', 'Steven Spielberg', '_19pRsZRiz4', 'posters/WariyMd5vrIh732qkoZSu6ap2UAZ2NoBWAXKq6DH.jpeg', 'Haley Joel Osment,Jude Law,Frances O\'Connor,Brendan Gleeson,William Hurt', '2001-06-26', 7.20, 'David, a highly advanced robotic boy, longs to become a human child so that he can regain the love of his foster mother who abandoned him. He soon embarks on a journey to make his dreams come true.', '2hr26min', '2021-01-16 05:48:40', '2021-01-16 05:48:40'),
(5, 1, 'The Warriors', 'Walter Hill', '--gdB-nnQkU', 'posters/laEaaQ2focZSP0vRMcNlykEMGPGKUboYPMMu6IJO.jpeg', 'Michael Beck,James Remar,Deborah Van Valkenburgh,Marcelino Sánchez,David Harris,Tom McKitterick,Brian Tyler,Dorsey Wright,Terry Michos,David Patrick Kelly,Roger Hill,Edward Sewer,Lynne Thigpe', '1979-02-01', 7.60, 'A gang called \'The Warriors\' are framed for killing a gang leader trying to unite all the gangs in the area. With other gangs gunning for them they must get back alive to the home turf of Coney Island', '1hr34min', '2021-01-16 05:50:59', '2021-01-16 05:50:59'),
(7, 1, 'Titanic', 'James Cameron', 'b0KYvGa_nN8', 'posters/4gfgRjh2RLGp2pqWROy1OPM91xxvSjGLE1wzBTVr.jpeg', 'Leonardo DiCaprio,Kate Winslet,Billy Zane,Kathy Bates,Frances Fisher,Bernard Hill,Jonathan Hyde,Danny Nucci,David Warner,Bill Paxton', '1997-11-18', 7.80, 'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.', '3hr30min', '2021-01-16 05:56:56', '2021-01-16 05:56:56'),
(8, 1, 'The Lion King', 'Rob Minkoff, Roger Allers', 'eHcZlPpNt0Q', 'posters/XYZDVRJ4XjrOoXYK0NcV8DlKZ43bCjKeiqHCG08q.jpeg', 'Jeremy Irons, James Earl Jones, Nathan Lane', '1994-05-07', 8.50, 'As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar. Years later, he returns as a young lion to reclaim his throne.', '1hr29min', '2021-01-16 06:07:34', '2021-01-16 06:07:34'),
(9, 1, 'Terminator 2', 'James Cameron', 'CRRlbK5w8AE', 'posters/ZuxM1JzseBxO4u6gpcZBwFsTK2Nsw0Y6ZTJZ5jFd.jpeg', 'Arnold Schwarzenegger Linda Hamilton Robert Patrick', '1991-07-01', 8.50, 'A terminator is set on a mission to kill Sarah\'s son, John Connor. However, another cyborg, who was once after Sarah\'s life, has now been assigned to protect him.', '2hr36min', '2021-01-16 06:19:04', '2021-01-16 06:19:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `movies_movie_unique` (`movie`),
  ADD KEY `movies_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
