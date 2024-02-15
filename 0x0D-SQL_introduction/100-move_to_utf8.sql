-- Change character SET and COLLATE
-- cat 100-move_to_utf8.sql | mysql -hlocalhost -uroot -p
SELECT city, AVG(value) AS avg_temp
FROM temperatures
GROUP BY city
ORDER BY avg_temp DESC;
