package org.hack.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

public class AppConfig {

    @Configuration

    @ComponentScan(basePackages = "org.hack")

    @PropertySource("classpath*:application.properties")
    public class SpringConfig {

        @Autowired
        private Environment env;

        @Bean(name = "jdbcTemplate1")
//this bean is a java class so we want to use is we can create the object using this
        public JdbcTemplate jdbcTemplate1(){
            JdbcTemplate jdbcTemplate1 = new JdbcTemplate();
            jdbcTemplate1.setDataSource(dataSource1());
            return jdbcTemplate1;
        }
        @Bean(name = "jdbcTemplate2")
        public JdbcTemplate jdbcTemplate2(){
            JdbcTemplate jdbcTemplate2 = new JdbcTemplate();
            jdbcTemplate2.setDataSource(dataSource2());
            return jdbcTemplate2;
        }


        @Bean
        public DataSource dataSource1(){
            DriverManagerDataSource dataSource = new DriverManagerDataSource();
            dataSource.setDriverClassName(env.getProperty("mysql.driver.class"));
            dataSource.setUrl(env.getProperty("mysql.urladmin"));
            dataSource.setUsername(env.getProperty("mysql.username"));
            dataSource.setPassword(env.getProperty("mysql.password"));
            return dataSource;
        }
        @Bean
        public DataSource dataSource2(){
            DriverManagerDataSource dataSource = new DriverManagerDataSource();
            dataSource.setDriverClassName(env.getProperty("mysql.driver.class"));

            dataSource.setUrl(env.getProperty("mysql.urluser"));
            dataSource.setUsername(env.getProperty("mysql.username"));
            dataSource.setPassword(env.getProperty("mysql.password"));
            return dataSource;
        }

    }

}
