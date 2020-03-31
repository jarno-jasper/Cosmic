<?php
namespace App\Controllers\Admin;

use App\Models\Admin;
use App\Models\Player;
use App\Models\Core;
use App\Models\Permission;

use Core\View;

use Library\Json;

class Settings
{
    public function save()
    {
        foreach(input()->all() as $column => $value) {
          
            if($column == "krews_api_hotel_slug") {
                $value = \App\Helper::convertSlug($value);    
            }
          
            Admin::saveSettings($column, $value);
        }
      
        response()->json(["status" => "success", "message" => "Saved!"]);
    }
  
    public function addCurrency()
    {
        $currency = input()->post('currency')->value;
        $type = input()->post('type')->value;
        $amount = input()->post('amount')->value;
      
        $users = Player::getAllUsers(["id"]);
        foreach($users as $row) {
            Player::createCurrency($row->id, $type);
        }
      
        Core::addCurrency($currency, $type, $amount);
        response()->json(["status" => "success", "message" => "Currency has been added!"]);
    }
  
    public function deleteCurrency()
    {
        $type = input()->post('type')->value;
      
        $users = Player::getAllUsers();
        foreach($users as $row) {
            Player::deleteCurrency($row->id, $type);
        }
      
        if(Core::deleteCurrency($type, input()->post('currency')->value)) {
            response()->json(["status" => "success", "message" => "Currency has been deleted"]);
        }
    }
  
    public function getCurrencys()
    {
        response()->json(Core::getCurrencys());
    }
  
    public function view()
    {
        $settings = Core::settings();
        $settings->vip_badges = json_decode($settings->vip_badges,true);
      
        $settings->vip_currency_type = Core::getCurrencyByType($settings->vip_currency_type);
        $settings->namechange_currency_type = Core::getCurrencyByType($settings->namechange_currency_type);
        $settings->draw_badge_currency = Core::getCurrencyByType($settings->draw_badge_currency);
      
        $settings->ranks = Permission::getRanks();
        $settings->user_of_the_week = Player::getDataById($settings->user_of_the_week ?? 0, ['id', 'username']) ?? false;

        View::renderTemplate('Admin/Management/settings.html', ['settings' => $settings, 'permission' => 'housekeeping_config']);
    }
}