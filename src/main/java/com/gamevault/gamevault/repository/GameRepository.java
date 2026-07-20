package com.gamevault.gamevault.repository;

import com.gamevault.gamevault.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
}