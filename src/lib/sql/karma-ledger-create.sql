CREATE TABLE IF NOT EXISTS karma.karma_ledger (
   user_id bigint(20) NOT NULL,
   user_name varchar(20) NOT NULL,
   karma int(11) NOT NULL,
   channel_id int(11) NOT NULL,
   timestamp timestamp NOT NULL,
  PRIMARY KEY (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;