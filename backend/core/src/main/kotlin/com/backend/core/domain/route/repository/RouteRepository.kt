package com.backend.core.domain.route.repository

import com.example.core.domain.route.Route
import org.springframework.data.jpa.repository.JpaRepository

interface RouteRepository: JpaRepository<Route, Long>