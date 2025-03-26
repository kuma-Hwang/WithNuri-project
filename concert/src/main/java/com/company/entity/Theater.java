package com.company.entity;

import jakarta.persistence.*;

@Entity
public class Theater {

    @Id @GeneratedValue
    private Long theaterId;

    private String name;
    private String location;
}