import argparse
import time

from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager


def main(url: str):
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--headless')
    chrome_options.add_experimental_option('excludeSwitches', ['enable-automation'])
    chrome_options.add_argument('--disable-extensions')

    driver = webdriver.Chrome(ChromeDriverManager().install(), options=chrome_options)
    driver.get(url)

    time.sleep(1)
    a_tags = driver.find_elements_by_xpath('//*[@id="siteList"]//a')

    item = []
    for a in a_tags:
        item.append(a.get_attribute('href'))

    data = "',".join("'" + str(i) for i in item) + "',"
    print(data)

    driver.quit()


if __name__ == '__main__':
    arg = argparse.ArgumentParser()
    arg.add_argument('--url', type=str)
    args = arg.parse_args()

    exec(args.url)
