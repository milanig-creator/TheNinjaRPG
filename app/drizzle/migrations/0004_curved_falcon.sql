ALTER TABLE `War` MODIFY COLUMN `attackerShrineHp` smallint NOT NULL DEFAULT 500;
ALTER TABLE `War` MODIFY COLUMN `attackerShrineMaxHp` smallint NOT NULL DEFAULT 500;
ALTER TABLE `UserData` ADD `nameColor` varchar(16) DEFAULT '' NOT NULL;
ALTER TABLE `UserData` ADD `titleColor` varchar(16) DEFAULT '' NOT NULL;
ALTER TABLE `UserData` ADD `dailyWarMissions` smallint unsigned DEFAULT 0 NOT NULL;