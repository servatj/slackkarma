CREATE TABLE IF NOT EXISTS karma.karma_ledger (
   user_id varchar(20) NOT NULL,
   user_name varchar(20) NOT NULL,
   karma bigint(11) NOT NULL,
   channel_id varchar(30) NOT NULL,
   timestamp timestamp NOT NULL,
  PRIMARY KEY (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;